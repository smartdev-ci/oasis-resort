import { Viewer } from "@photo-sphere-viewer/core";
import { AutorotatePlugin } from "@photo-sphere-viewer/autorotate-plugin";
import { useEffect, useRef } from "react";
import "@photo-sphere-viewer/core/index.css";
// import "@photo-sphere-viewer/autorotate-plugin/index.css";

interface Panorama360Props {
  panorama: string;
  className?: string;
}

export default function Panorama360({ panorama, className = "" }: Panorama360Props) {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!viewerRef.current) return;

    const viewer = new Viewer({
      container: viewerRef.current,
      panorama,
      caption: '',
      loadingImg: 'https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif',
      navbar: [
        'zoom',
        'fullscreen',
        'autorotate'
      ],
      plugins: [
        AutorotatePlugin
      ]
    });

    return () => {
      if (viewer) {
        viewer.destroy();
      }
    };
  }, [panorama]);

  return (
    <div
      ref={viewerRef}
      className={`w-full h-full ${className}`}
    />
  );
}
