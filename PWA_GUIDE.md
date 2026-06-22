# 🚀 Guide PWA pour Oasis Ressort

Ce guide explique comment configurer et générer toutes les ressources nécessaires pour une PWA (Progressive Web App) compatible Android et iOS.

---

## ✅ Configuration Déjà Effectuée

Les éléments suivants sont déjà configurés dans le projet :

### 1. **Configuration Vite** (`vite.config.ts`)
- Plugin `@vitejs/plugin-pwa` installé et configuré
- Service Worker généré automatiquement
- Cache des ressources configuré

### 2. **Manifest** (`public/manifest.webmanifest`)
- Nom, description, couleurs configurés
- Déclaration des icônes et splash screens
- Shortcuts pour l'application

### 3. **Service Worker** (`public/sw.js`)
- Stratégie de cache personnalisée
- Gestion des images Pexels
- Gestion de l'API Mistral
- Mode hors ligne

### 4. **Meta Tags** (`index.html`)
- Link vers le manifest
- Icons pour Android et iOS
- Splash screens pour iOS
- Scripts d'installation PWA
- Détection du mode PWA

---

## 📁 Fichiers à Générer

Vous devez générer les images suivantes et les placer dans le dossier `public/` :

### 🎨 Icônes PWA

| Fichier | Dimensions | Utilisation |
|---------|------------|-------------|
| `pwa-192x192.png` | 192×192 | Icône Android (launcher) |
| `pwa-512x512.png` | 512×512 | Icône Android (high-res) |
| `pwa-512x512-maskable.png` | 512×512 | Icône Android (masquable) |
| `pwa-apple-touch-icon.png` | 180×180 | Icône iOS (Touch Icon) |

### 📱 Splash Screens iOS

| Fichier | Dimensions | Appareil |
|---------|------------|----------|
| `splash-apple-640x1136.png` | 640×1136 | iPhone 5/5S/5C/SE |
| `splash-apple-750x1334.png` | 750×1334 | iPhone 6/6S/7/8/SE2 |
| `splash-apple-1242x2208.png` | 1242×2208 | iPhone 6+/6S+/7+/8+ |
| `splash-apple-1125x2436.png` | 1125×2436 | iPhone X/XS/11/12/13/14/15 |
| `splash-apple-1536x2048.png` | 1536×2048 | iPad Mini / iPad Air |
| `splash-apple-1668x2224.png` | 1668×2224 | iPad Pro 10.5" |
| `splash-apple-2048x2732.png` | 2048×2732 | iPad Pro 12.9" |

### 🎯 Icônes pour Shortcuts (Optionnel)

| Fichier | Dimensions | Utilisation |
|---------|------------|-------------|
| `icon-search.png` | 96×96 | Shortcut "Rechercher" |
| `icon-bookings.png` | 96×96 | Shortcut "Réservations" |
| `icon-ai.png` | 96×96 | Shortcut "Concierge IA" |

### 📄 Page Hors Ligne (Optionnel)

Créez un fichier `public/offline.html` pour afficher une page personnalisée lorsque l'utilisateur est hors ligne.

---

## 🛠️ Outils pour Générer les Images

### Option 1: Utiliser un Générateur en Ligne (Recommandé)

#### 🔗 [RealFavIconGenerator](https://realfavicongenerator.net/)
1. Allez sur https://realfavicongenerator.net/
2. Upload votre logo (utilisez `public/Logo_oasisressort.png`)
3. Sélectionnez les options :
   - Nom: "Oasis Ressort"
   - Couleur de thème: `#1A3A2A`
   - Couleur de fond: `#FAF8F3`
   - Affichage: Standalone
4. Sélectionnez les plateformes : Windows, Android, iOS
5. Générez et téléchargez le package
6. Copiez les fichiers nécessaires dans `public/`

#### 🔗 [PWA Asset Generator](https://pwa-asset-generator.netlify.app/)
1. Upload votre logo
2. Configurez les couleurs
3. Téléchargez les icônes

#### 🔗 [Favicon Generator](https://favicon.io/)
1. Upload votre logo
2. Générez les favicons
3. Téléchargez le package

---

### Option 2: Utiliser un Script Node.js

Installez et utilisez `pwa-asset-generator` :

```bash
npm install -g pwa-asset-generator

# Générer les icônes à partir de votre logo
pwa-asset-generator Logo_oasisressort.png public/ --opaque false --padding 0 --background "#FAF8F3" --theme-color "#1A3A2A"
```

Cela générera toutes les icônes nécessaires dans le dossier `public/`.

---

### Option 3: Créer Manuellement avec un Éditeur d'Image

#### Spécifications pour les Icônes :

1. **Format** : PNG
2. **Fond transparent** ou couleur de fond `#FAF8F3`
3. **Couleurs** : Utilisez les couleurs de la marque (vert `#1A3A2A`, or `#E9A825`)
4. **Style** : Logo Oasis Ressort centré avec un léger padding

#### Exemple de Structure :
```
public/
├── pwa-192x192.png
├── pwa-512x512.png
├── pwa-512x512-maskable.png  (icône avec fond transparent pour Android)
├── pwa-apple-touch-icon.png
├── splash-apple-640x1136.png
├── splash-apple-750x1334.png
├── splash-apple-1242x2208.png
├── splash-apple-1125x2436.png
├── splash-apple-1536x2048.png
├── splash-apple-1668x2224.png
├── splash-apple-2048x2732.png
└── ...
```

---

## 📱 Splash Screens iOS

Les splash screens pour iOS doivent être des images **portrait** avec les dimensions exactes.

### Comment créer les splash screens :

1. **Utiliser Figma ou Photoshop**
   - Créez un canevas de la taille correspondante
   - Placez votre logo et éléments graphiques
   - Exportez en PNG

2. **Utiliser un générateur en ligne**
   - [Splash Screen Generator](https://splashscreen.io/)
   - [App Icon & Splash Screen Generator](https://app-icon.generator.io/)

3. **Spécifications** :
   - **Couleur de fond** : `#FAF8F3` (crème)
   - **Logo** : Logo Oasis Ressort centré
   - **Éléments** : Peut inclure le nom "Oasis Ressort" et un slogan

---

## 🔧 Configuration Complémentaire

### 1. Vérifier le Manifest

Le fichier `public/manifest.webmanifest` contient toutes les configurations nécessaires. Vous pouvez le personnaliser :

```json
{
  "name": "Oasis Ressort",
  "short_name": "OasisResort",
  "description": "Votre compagnon IA pour voyager en Afrique",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#FAF8F3",
  "theme_color": "#1A3A2A"
}
```

### 2. Tester la PWA

#### Avec Chrome DevTools :
1. Ouvrez votre site dans Chrome
2. Ouvrez DevTools (F12)
3. Allez dans l'onglet **Application**
4. Vérifiez dans **Manifest** et **Service Workers**

#### Avec Lighthouse :
1. Dans Chrome DevTools, allez dans l'onglet **Lighthouse**
2. Sélectionnez **PWA**
3. Lancez l'audit
4. Vérifiez que vous avez un score élevé (90+)

### 3. Tester sur Mobile

#### Android :
1. Ouvrez Chrome sur votre téléphone
2. Allez sur votre site
3. Un popup d'installation devrait apparaître
4. Installez l'application
5. Vérifiez qu'elle s'ouvre comme une app native

#### iOS :
1. Ouvrez Safari sur votre iPhone/iPad
2. Allez sur votre site
3. Tap "Partager" (en bas au centre)
4. Sélectionnez "Sur l'écran d'accueil"
5. L'application s'installera sur votre écran d'accueil

---

## 📊 Vérification de la PWA

### Checklist :

- [ ] `public/manifest.webmanifest` existe
- [ ] Toutes les icônes sont dans `public/`
- [ ] `vite.config.ts` a le plugin PWA configuré
- [ ] `index.html` a les meta tags PWA
- [ ] Service Worker est enregistré
- [ ] L'application fonctionne hors ligne (partiellement)
- [ ] Le popup d'installation apparaît
- [ ] L'application s'installe sur Android
- [ ] L'application s'installe sur iOS

---

## 🎯 Personnalisation Avancée

### 1. Couleurs

Les couleurs sont définies dans :
- `manifest.webmanifest` : `theme_color` et `background_color`
- `index.html` : meta tags de couleur
- `vite.config.ts` : configuration PWA

**Couleurs recommandées** :
- Vert principal : `#1A3A2A`
- Vert clair : `#40916C`
- Crème : `#FAF8F3`
- Or : `#E9A825`

### 2. Noms

- **Name** : "Oasis Ressort" (affiché dans le menu des applications)
- **Short Name** : "OasisResort" (affiché sous l'icône)

### 3. Mode d'Affichage

Différentes options :
- `standalone` : Pas de barre d'adresse (recommandé)
- `fullscreen` : Plein écran sans UI navigateur
- `minimal-ui` : Barre d'adresse minimale
- `browser` : Comme un navigateur normal

---

## 🚀 Déploiement

Une fois toutes les images générées et placées dans `public/` :

1. **Test local** :
   ```bash
   npm run dev
   ```
   Testez sur http://localhost:5173

2. **Build** :
   ```bash
   npm run build
   ```
   Les fichiers PWA seront générés dans `dist/`

3. **Déployez** :
   - Vercel
   - Netlify
   - Cloudflare Pages
   - Serveur Apache/Nginx

4. **Vérifiez** :
   - Ouvrez votre site sur mobile
   - Le popup d'installation devrait apparaître
   - L'application devrait fonctionner hors ligne

---

## ❓ FAQ

### 1. Le popup d'installation n'apparaît pas ?

**Solutions** :
- Vérifiez que le service worker est bien enregistré
- Vérifiez que le manifest est valide
- Assurez-vous que l'application répond aux critères PWA (Lighthouse score > 90)
- Testez sur Chrome ou Edge (Safari a des limitations)

### 2. Les icônes ne s'affichent pas correctement ?

**Solutions** :
- Vérifiez que les fichiers d'icônes existent dans `public/`
- Vérifiez les chemins dans `manifest.webmanifest`
- Assurez-vous que les icônes ont les bonnes dimensions

### 3. L'application ne fonctionne pas hors ligne ?

**Solutions** :
- Vérifiez que le service worker est installé
- Chargez l'application au moins une fois en ligne
- Vérifiez dans DevTools > Application > Service Workers

### 4. Comment mettre à jour la PWA ?

**Processus** :
1. Modifiez le code
2. Incrémentez la version dans `manifest.webmanifest`
3. Les utilisateurs recevront une notification de mise à jour
4. La nouvelle version sera installée au prochain lancement

---

## 📚 Ressources Utiles

- [MDN - Progressive Web Apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Google PWA Documentation](https://web.dev/progressive-web-apps/)
- [PWA Checklist](https://web.dev/pwa-checklist/)
- [Workbox Documentation](https://developers.google.com/web/tools/workbox)
- [Vite PWA Plugin](https://github.com/vite-pwa/vite-plugin-pwa)

---

## 🎉 C'est prêt !

Une fois toutes les images générées et placées dans `public/`, votre PWA sera **100% fonctionnelle** sur Android et iOS !

Pour des questions supplémentaires, consultez la documentation officielle ou contactez l'équipe de développement.
