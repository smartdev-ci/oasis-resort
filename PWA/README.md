# 🚀 Oasis Ressort PWA

Bienvenue dans la configuration PWA (Progressive Web App) pour Oasis Ressort !

---

## ✅ Ce qui est déjà configuré

Votre application Oasis Ressort est maintenant une **PWA complète** avec :

### 1. **Manifest Web App** (`public/manifest.webmanifest`)
- Nom : "Oasis Ressort"
- Icônes pour Android et iOS
- Shortcuts pour un accès rapide
- Configuration des couleurs (#1A3A2A)

### 2. **Service Worker** (`public/sw.js`)
- Cache des ressources statiques
- Stratégie de cache personnalisée pour :
  - Images Pexels (Cache-First)
  - API Mistral (Network-First)
  - Autres ressources (Stale-While-Revalidate)
- Mode hors ligne avec page personnalisée

### 3. **Configuration Vite** (`vite.config.ts`)
- Plugin `vite-plugin-pwa` installé et configuré
- Génération automatique du service worker
- Workbox pour la gestion du cache

### 4. **Meta Tags** (`index.html`)
- Link vers le manifest
- Icons pour toutes les plateformes
- Splash screens pour iOS
- Scripts d'installation PWA
- Détection du mode PWA
- Bannière d'installation pour Android
- Guide d'installation pour iOS

### 5. **Page Hors Ligne** (`public/offline.html`)
- Design personnalisé
- Liste des fonctionnalités disponibles hors ligne
- Boutons pour reconnexion

---

## 📁 Structure des Fichiers PWA

```
project/
├── public/
│   ├── manifest.webmanifest      # Configuration PWA
│   ├── sw.js                     # Service Worker personnalisé
│   ├── offline.html              # Page hors ligne
│   ├── pwa-192x192.png           # Icône Android
│   ├── pwa-512x512.png           # Icône Android HD
│   ├── pwa-512x512-maskable.png  # Icône Android masquable
│   ├── pwa-apple-touch-icon.png  # Icône iOS
│   ├── splash-apple-*.png        # Splash screens iOS
│   └── ...
├── scripts/
│   └── generate-pwa-assets.js    # Script de génération
├── vite.config.ts                # Configuration Vite + PWA
└── index.html                    # Meta tags PWA
```

---

## 🎯 Fonctionnalités PWA Implémentées

### 1. **Installation sur Android**
- ✅ Popup d'installation automatique
- ✅ Icône dans le launcher
- ✅ Nom et description personnalisés
- ✅ Couleurs de thème appliquées

### 2. **Installation sur iOS**
- ✅ Ajout à l'écran d'accueil via "Partager > Sur l'écran d'accueil"
- ✅ Splash screens pour tous les appareils
- ✅ Icône Apple Touch
- ✅ Mode standalone (sans barre d'adresse)

### 3. **Mode Hors Ligne**
- ✅ Cache des ressources statiques
- ✅ Cache des images Pexels
- ✅ Cache des réponses API (24h)
- ✅ Page hors ligne personnalisée
- ✅ Détection automatique de la reconnexion

### 4. **Mises à Jour**
- ✅ Détection des nouvelles versions
- ✅ Notification aux utilisateurs
- ✅ Mise à jour automatique au prochain lancement

---

## 🛠️ Génération des Assets PWA

Pour générer toutes les icônes et splash screens nécessaires :

### Option 1: Utiliser un générateur en ligne (RECOMMANDÉ)

1. **RealFaviconGenerator** : https://realfavicongenerator.net/
   - Upload `public/Logo_oasisressort.png`
   - Configurez les options (nom, couleurs, etc.)
   - Téléchargez et copiez les fichiers dans `public/`

2. **PWA Asset Generator** : https://pwa-asset-generator.netlify.app/
   - Upload votre logo
   - Configurez les couleurs
   - Téléchargez les assets

### Option 2: Utiliser le script Node.js

```bash
# Installer sharp (requis)
npm install sharp

# Générer les assets
npm run pwa:generate-assets
```

### Option 3: Créer manuellement

Créez les fichiers suivants dans `public/` :

#### Icônes obligatoires :
- `pwa-192x192.png` (192×192)
- `pwa-512x512.png` (512×512)
- `pwa-512x512-maskable.png` (512×512, fond transparent)
- `pwa-apple-touch-icon.png` (180×180)

#### Splash screens iOS :
- `splash-apple-640x1136.png` (640×1136)
- `splash-apple-750x1334.png` (750×1334)
- `splash-apple-1242x2208.png` (1242×2208)
- `splash-apple-1125x2436.png` (1125×2436)
- `splash-apple-1536x2048.png` (1536×2048)
- `splash-apple-1668x2224.png` (1668×2224)
- `splash-apple-2048x2732.png` (2048×2732)

#### Icônes optionnelles :
- `icon-search.png` (96×96)
- `icon-bookings.png` (96×96)
- `icon-ai.png` (96×96)

---

## 🧪 Tester la PWA

### 1. Test local

```bash
npm run dev
```

Ouvrez http://localhost:5173 dans Chrome ou Edge.

### 2. Vérification avec Chrome DevTools

1. Ouvrez DevTools (F12)
2. Allez dans l'onglet **Application**
3. Vérifiez :
   - **Manifest** : Le manifest est valide
   - **Service Workers** : Le service worker est installé
   - **Cache Storage** : Les caches sont créés

### 3. Audit Lighthouse

1. Dans DevTools, allez dans l'onglet **Lighthouse**
2. Sélectionnez **PWA**
3. Lancez l'audit
4. Vérifiez le score (doit être > 90)

### 4. Test sur mobile

#### Android (Chrome) :
1. Ouvrez votre site
2. Un popup "Installer" devrait apparaître
3. Cliquez sur "Installer"
4. L'application s'installera sur votre écran d'accueil

#### iOS (Safari) :
1. Ouvrez votre site
2. Tap "Partager" (bouton en bas au centre)
3. Sélectionnez "Sur l'écran d'accueil"
4. L'application s'installera

---

## 📊 Vérification de la PWA

### Checklist :

- [ ] `public/manifest.webmanifest` existe et est valide
- [ ] `public/sw.js` existe
- [ ] Toutes les icônes sont dans `public/`
- [ ] `index.html` a les meta tags PWA
- [ ] Service Worker est enregistré (visible dans DevTools)
- [ ] L'application fonctionne en mode hors ligne
- [ ] Le popup d'installation apparaît sur Android
- [ ] L'application s'installe sur iOS
- [ ] Lighthouse PWA score > 90

---

## 🔧 Configuration Avancée

### Personnaliser le Manifest

Éditez `public/manifest.webmanifest` :

```json
{
  "name": "Oasis Ressort",
  "short_name": "OasisRessort",
  "description": "Votre compagnon IA pour voyager en Afrique",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#FAF8F3",
  "theme_color": "#1A3A2A",
  "icons": [...]
}
```

### Personnaliser le Service Worker

Éditez `public/sw.js` pour :
- Ajouter des stratégies de cache personnalisées
- Gérer des routes spécifiques
- Configurer le cache des API

### Personnaliser les Couleurs

Les couleurs sont définies dans :
- `manifest.webmanifest` : `theme_color`, `background_color`
- `index.html` : meta tags
- `vite.config.ts` : configuration PWA

**Couleurs de la marque Oasis Ressort** :
- Vert principal : `#1A3A2A`
- Vert clair : `#40916C`
- Vert émeraude : `#10B981`
- Crème : `#FAF8F3`
- Or : `#E9A825`

---

## 📦 Déploiement

### 1. Build pour la production

```bash
npm run build
```

Les fichiers PWA seront générés dans `dist/` :
- `dist/manifest.webmanifest`
- `dist/sw.js`
- `dist/workbox-*.js`
- `dist/registerSW.js`

### 2. Déployer

Déployez le contenu du dossier `dist/` sur :
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- Serveur Apache/Nginx
- N'importe quel hébergement statique

### 3. Vérifier

1. Ouvrez votre site sur mobile
2. Le popup d'installation devrait apparaître
3. L'application devrait fonctionner hors ligne (partiellement)

---

## ❓ FAQ

### 1. Le popup d'installation n'apparaît pas ?

**Causes possibles** :
- Le service worker n'est pas enregistré
- Le manifest est invalide
- L'application ne répond pas aux critères PWA
- Vous testez sur Safari (limité)

**Solutions** :
- Vérifiez dans DevTools > Application > Manifest
- Vérifiez que le service worker est installé
- Assurez-vous que toutes les icônes sont présentes
- Testez avec Lighthouse (score > 90)

### 2. L'application ne fonctionne pas hors ligne ?

**Causes possibles** :
- Le service worker n'est pas installé
- Les ressources n'ont pas été cache
- Première visite nécessaire

**Solutions** :
- Chargez l'application au moins une fois en ligne
- Vérifiez dans DevTools > Application > Service Workers
- Vérifiez dans DevTools > Application > Cache Storage

### 3. Comment forcer une mise à jour ?

1. Modifiez le code
2. Incrémentez la version dans le manifest
3. Les utilisateurs recevront une notification
4. La nouvelle version sera installée au prochain lancement

### 4. Comment désinstaller la PWA ?

**Android** :
- Maintenez l'icône de l'application
- Sélectionnez "Désinstaller"

**iOS** :
- Maintenez l'icône de l'application
- Sélectionnez "Supprimer"

**Chrome** :
- Allez dans `chrome://apps/`
- Cliquez droit sur l'application
- Sélectionnez "Désinstaller"

---

## 📚 Ressources

- [MDN - PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Google PWA Guide](https://web.dev/progressive-web-apps/)
- [PWA Checklist](https://web.dev/pwa-checklist/)
- [Workbox Documentation](https://developers.google.com/web/tools/workbox)
- [Vite PWA Plugin](https://github.com/vite-pwa/vite-plugin-pwa)

---

## 🎉 Votre PWA est prête !

Une fois toutes les images générées et placées dans `public/`, votre application Oasis Ressort sera une **PWA 100% fonctionnelle** sur Android et iOS !

Les utilisateurs pourront :
- Installer l'application sur leur écran d'accueil
- Utiliser l'application hors ligne (fonctionnalités limitées)
- Recevoir des notifications de mise à jour
- Bénéficier d'une expérience native

---

**Pour toute question, consultez le guide complet dans `PWA_GUIDE.md`**
