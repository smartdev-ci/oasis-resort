import { useState, useEffect, useRef } from 'react';
import { Building2, Camera, Moon, Users, Waves, MapPin, Sparkles } from 'lucide-react';
import { cityPins, mapAreaHighlights } from '../data/properties';
import { useI18n } from '../i18n';

interface SmartMapProps {
  onSelectArea?: (area: string) => void;
}

// Leaflet loaded from CDN — no npm dependency needed
const LEAFLET_CSS = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
const LEAFLET_JS  = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';

function loadLeaflet(): Promise<typeof window.L> {
  return new Promise((resolve) => {
    if (window.L) { resolve(window.L); return; }

    // Inject CSS
    if (!document.querySelector(`link[href="${LEAFLET_CSS}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = LEAFLET_CSS;
      document.head.appendChild(link);
    }

    // Inject JS
    if (!document.querySelector(`script[src="${LEAFLET_JS}"]`)) {
      const script = document.createElement('script');
      script.src = LEAFLET_JS;
      script.onload = () => resolve(window.L);
      document.head.appendChild(script);
    } else {
      // Script tag exists but may still be loading
      const check = setInterval(() => {
        if (window.L) { clearInterval(check); resolve(window.L); }
      }, 50);
    }
  });
}

export function SmartMap({ onSelectArea }: SmartMapProps) {
  const { t } = useI18n();
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [leafletReady, setLeafletReady] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef   = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedCityRef = useRef<string | null>(null);

  const areaLabelMap: Record<string, string> = {
    business:   t('area_business'),
    tourist:    t('area_tourist'),
    nightlife:  t('area_nightlife'),
    family:     t('area_family'),
    beachfront: t('area_beachfront'),
    heritage:   t('area_heritage'),
  };

  const areaIcons: Record<string, typeof Building2> = {
    business:   Building2,
    tourist:    Camera,
    nightlife:  Moon,
    family:     Users,
    beachfront: Waves,
    heritage:   MapPin,
  };

  // Initialise map once Leaflet is loaded
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    loadLeaflet().then((L) => {
      if (!containerRef.current || mapRef.current) return;

      // Fix default icon paths broken by bundlers
      delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl:        'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl:      'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      const map = L.map(containerRef.current, {
        center: [5, 20],
        zoom: 3,
        zoomControl: false,
        scrollWheelZoom: false,
        attributionControl: false,
      });

      // CartoDB Positron — clean minimal tiles, free & no API key
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        { subdomains: 'abcd', maxZoom: 18 }
      ).addTo(map);

      L.control.attribution({ position: 'bottomright', prefix: false })
        .addAttribution('© <a href="https://carto.com" target="_blank">CARTO</a>')
        .addTo(map);

      L.control.zoom({ position: 'topright' }).addTo(map);

      mapRef.current = map;

      // Add city markers
      cityPins.forEach((city) => {
        const areaColor =
          city.areaType === 'business'  ? '#1A3A2A' :
          city.areaType === 'tourist'   ? '#40916C' :
          city.areaType === 'heritage'  ? '#E9A825' : '#74C69D';

        const iconHtml = `
          <div style="
            width:44px; height:44px;
            background:white;
            border-radius:50%;
            display:flex; align-items:center; justify-content:center;
            box-shadow: 0 4px 16px rgba(0,0,0,0.18);
            border: 3px solid ${areaColor};
            cursor:pointer;
            font-size:11px; font-weight:700;
            color:${areaColor};
            font-family: 'Plus Jakarta Sans', sans-serif;
          ">${city.properties}</div>`;

        const marker = L.marker([city.lat, city.lng], {
          icon: L.divIcon({ html: iconHtml, className: '', iconSize: [44, 44], iconAnchor: [22, 22] }),
        }).addTo(map);

        marker.on('click', () => {
          selectedCityRef.current = city.name;
          setSelectedCity(city.name);
        });
      });

      setLeafletReady(true);
    });

    return () => {
      if (mapRef.current) { mapRef.current.remove(); mapRef.current = null; }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fly to city when selection changes
  useEffect(() => {
    if (!selectedCity || !mapRef.current) return;
    const city = cityPins.find((c) => c.name === selectedCity);
    if (city) mapRef.current.flyTo([city.lat, city.lng], 10, { duration: 1.2 });
  }, [selectedCity]);

  const selectedCityData = cityPins.find((c) => c.name === selectedCity);

  return (
    <section className="relative py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100/60 text-primary-500 text-xs font-medium mb-4">
            <MapPin className="w-3.5 h-3.5 text-primary-400" />
            {t('map_badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-600 mb-3 text-balance">
            {t('map_title')}
          </h2>
          <p className="text-primary-400 text-lg max-w-xl mx-auto">{t('map_subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
          {/* Map container */}
          <div className="relative rounded-4xl overflow-hidden shadow-soft-lg bg-primary-50" style={{ height: 520 }}>
            {/* Loading state */}
            {!leafletReady && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-primary-50">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-primary-200 border-t-primary-500 animate-spin" />
                  <span className="text-sm text-primary-400">Chargement de la carte...</span>
                </div>
              </div>
            )}

            {/* Leaflet renders here */}
            <div ref={containerRef} className="w-full h-full" />

            {/* AI badge overlay */}
            <div className="absolute top-4 left-4 z-[400] glass rounded-2xl px-3 py-2 flex items-center gap-2 shadow-soft pointer-events-none">
              <Sparkles className="w-4 h-4 text-primary-500" />
              <span className="text-xs font-semibold text-primary-600">{t('map_ai_highlights')}</span>
            </div>

            {/* Selected city info card */}
            {selectedCityData && (
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs z-[400] glass rounded-2xl p-4 shadow-soft-lg animate-fade-in-up">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-primary-600">{selectedCityData.name}</h3>
                  <span className="text-xs text-primary-400">{selectedCityData.country}</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl font-bold text-primary-500">{selectedCityData.properties}</span>
                  <span className="text-xs text-primary-300">{t('map_properties')}</span>
                </div>
                <button
                  onClick={() => onSelectArea?.(selectedCityData.name)}
                  className="w-full py-2 rounded-xl bg-primary-500 hover:bg-primary-400 text-white text-sm font-medium transition-colors"
                >
                  {t('map_search_btn')} {selectedCityData.name}
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-primary-500 px-2">{t('map_ai_highlights')}</h3>

            {mapAreaHighlights.map((area) => {
              const Icon = areaIcons[area.type] || MapPin;
              const count = cityPins.filter((c) => c.areaType === area.type).length;
              return (
                <button
                  key={area.type}
                  onClick={() => {
                    const city = cityPins.find((c) => c.areaType === area.type);
                    if (city) setSelectedCity(city.name);
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-2xl transition-all ring-focus bg-primary-50/50 hover:bg-white hover:shadow-soft"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                    style={{ backgroundColor: area.color }}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-sm font-medium text-primary-500">{areaLabelMap[area.type] ?? area.label}</div>
                    <div className="text-2xs text-primary-300">{count || area.count} {t('area_areas')}</div>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: area.color }} />
                </button>
              );
            })}

            {/* City quick-select */}
            <div className="pt-3 border-t border-primary-100">
              <h3 className="text-xs font-semibold text-primary-400 px-2 mb-2">
                {t('area_tourist').split(' ')[0] === 'Zones' ? 'Villes' : 'Cities'}
              </h3>
              <div className="flex flex-wrap gap-1.5 px-1">
                {cityPins.map((city) => (
                  <button
                    key={city.name}
                    onClick={() => setSelectedCity(city.name)}
                    className={`px-3 py-1 rounded-full text-2xs font-medium transition-colors ring-focus ${
                      selectedCity === city.name
                        ? 'bg-primary-500 text-white'
                        : 'bg-primary-50 text-primary-400 hover:bg-primary-100'
                    }`}
                  >
                    {city.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leaflet popup & control styles */}
      <style>{`
        .leaflet-popup-content-wrapper {
          border-radius: 14px !important;
          box-shadow: 0 8px 32px rgba(0,0,0,0.10) !important;
          border: 1px solid #d8f3dc !important;
        }
        .leaflet-popup-content { margin: 10px 14px !important; }
        .leaflet-popup-tip { background: white !important; }
        .leaflet-control-zoom { border: none !important; border-radius: 12px !important; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.10) !important; }
        .leaflet-control-zoom a { border-radius: 0 !important; font-size: 16px !important; color: #2d6a4f !important; }
        .leaflet-control-zoom a:hover { background: #f0fdf4 !important; }
      `}</style>
    </section>
  );
}
