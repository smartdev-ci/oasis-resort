import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // Mode generateSW pour une configuration simple
      strategies: 'generateSW',
      
      // Configuration de base
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'Logo_oasisressort.png'],
      
      // Configuration du manifest
      manifest: {
        name: 'Oasis Ressort',
        short_name: 'OasisRessort',
        description: 'Votre compagnon IA pour voyager en Afrique',
        theme_color: '#1A3A2A',
        background_color: '#FAF8F3',
        display: 'standalone',
        orientation: 'portrait-primary',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512-maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      
      // Désactiver la génération automatique des assets
      // Nous fournissons nos propres icônes
      pwaAssets: {
        disabled: true,
        config: false,
        image: false,
      },
      
      // Configuration Workbox pour le caching
      workbox: {
        // Ressources à précacher
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        
        // Stratégies de runtime caching
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/images\.pexels\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'oasis-images-cache',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 jours
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/api\.mistral\.ai\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'oasis-api-cache',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 24 * 60 * 60, // 24 heures
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\.(?:js|css)$/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'oasis-assets-cache',
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      
      // Nom du fichier manifest
      manifestFilename: 'manifest.webmanifest',
      
      // Options de développement
      devOptions: {
        enabled: false,
        type: 'module',
        navigateFallback: '/',
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
