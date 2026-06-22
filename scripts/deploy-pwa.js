/**
 * Script de déploiement et vérification PWA
 * Ce script vérifie que toutes les ressources PWA sont en place
 * et fournit des instructions pour le déploiement
 */

const fs = require('fs');
const path = require('path');

// Configuration
const PROJECT_ROOT = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public');
const DIST_DIR = path.join(PROJECT_ROOT, 'dist');

// Liste des fichiers PWA requis
const REQUIRED_PWA_FILES = {
  manifest: 'manifest.webmanifest',
  serviceWorker: 'sw.js',
  offlinePage: 'offline.html',
};

// Liste des icônes PWA requises
const REQUIRED_ICONS = {
  android: [
    'pwa-192x192.png',
    'pwa-512x512.png',
    'pwa-512x512-maskable.png',
  ],
  ios: [
    'pwa-apple-touch-icon.png',
  ],
  splashScreens: [
    'splash-apple-640x1136.png',
    'splash-apple-750x1334.png',
    'splash-apple-1242x2208.png',
    'splash-apple-1125x2436.png',
    'splash-apple-1536x2048.png',
    'splash-apple-1668x2224.png',
    'splash-apple-2048x2732.png',
  ],
  optional: [
    'icon-search.png',
    'icon-bookings.png',
    'icon-ai.png',
  ],
};

// Fonction pour vérifier si un fichier existe
function fileExists(filePath) {
  return fs.existsSync(filePath);
}

// Fonction pour vérifier la configuration PWA
function checkPWAConfiguration() {
  console.log('🔍 Vérification de la configuration PWA...\n');
  
  let allGood = true;
  const results = {};
  
  // Vérifier les fichiers de base
  console.log('📄 Fichiers PWA de base :');
  for (const [name, file] of Object.entries(REQUIRED_PWA_FILES)) {
    const filePath = path.join(PUBLIC_DIR, file);
    const exists = fileExists(filePath);
    results[name] = exists;
    console.log(`   ${exists ? '✅' : '❌'} ${file}`);
    if (!exists) allGood = false;
  }
  
  // Vérifier les icônes
  console.log('\n🎨 Icônes PWA :');
  
  console.log('   Android :');
  for (const icon of REQUIRED_ICONS.android) {
    const iconPath = path.join(PUBLIC_DIR, icon);
    const exists = fileExists(iconPath);
    results[icon] = exists;
    console.log(`   ${exists ? '✅' : '❌'} ${icon}`);
    if (!exists) allGood = false;
  }
  
  console.log('   iOS :');
  for (const icon of REQUIRED_ICONS.ios) {
    const iconPath = path.join(PUBLIC_DIR, icon);
    const exists = fileExists(iconPath);
    results[icon] = exists;
    console.log(`   ${exists ? '✅' : '❌'} ${icon}`);
    if (!exists) allGood = false;
  }
  
  console.log('   Splash Screens iOS :');
  for (const splash of REQUIRED_ICONS.splashScreens) {
    const splashPath = path.join(PUBLIC_DIR, splash);
    const exists = fileExists(splashPath);
    results[splash] = exists;
    console.log(`   ${exists ? '✅' : '❌'} ${splash}`);
    if (!exists) allGood = false;
  }
  
  console.log('   Optionnel :');
  for (const icon of REQUIRED_ICONS.optional) {
    const iconPath = path.join(PUBLIC_DIR, icon);
    const exists = fileExists(iconPath);
    console.log(`   ${exists ? '✅' : '⚪'} ${icon} (optionnel)`);
  }
  
  return { allGood, results };
}

// Fonction pour vérifier la configuration Vite
function checkViteConfig() {
  console.log('\n🔧 Vérification de la configuration Vite...\n');
  
  const viteConfigPath = path.join(PROJECT_ROOT, 'vite.config.ts');
  if (!fileExists(viteConfigPath)) {
    console.log('   ❌ vite.config.ts introuvable');
    return false;
  }
  
  const viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
  
  const checks = {
    hasPWAPlugin: viteConfig.includes('VitePWA') || viteConfig.includes('vite-plugin-pwa'),
    hasManifestConfig: viteConfig.includes('manifest'),
    hasWorkboxConfig: viteConfig.includes('workbox'),
    hasServiceWorker: viteConfig.includes('sw.js') || viteConfig.includes('registerSW'),
  };
  
  let allGood = true;
  for (const [name, passed] of Object.entries(checks)) {
    console.log(`   ${passed ? '✅' : '❌'} ${name}`);
    if (!passed) allGood = false;
  }
  
  return allGood;
}

// Fonction pour vérifier index.html
function checkIndexHtml() {
  console.log('\n📄 Vérification de index.html...\n');
  
  const indexPath = path.join(PUBLIC_DIR, 'index.html');
  if (!fileExists(indexPath)) {
    console.log('   ❌ index.html introuvable');
    return false;
  }
  
  const indexHtml = fs.readFileSync(indexPath, 'utf8');
  
  const checks = {
    hasManifestLink: indexHtml.includes('manifest.webmanifest'),
    hasAppleTouchIcon: indexHtml.includes('apple-touch-icon'),
    hasPWA(detect: indexHtml.includes('beforeinstallprompt'),
    hasServiceWorker: indexHtml.includes('serviceWorker') || indexHtml.includes('sw.js'),
    hasMetaTags: indexHtml.includes('mobile-web-app-capable') && 
                indexHtml.includes('apple-mobile-web-app-capable'),
    hasThemeColor: indexHtml.includes('theme-color'),
  };
  
  let allGood = true;
  for (const [name, passed] of Object.entries(checks)) {
    console.log(`   ${passed ? '✅' : '❌'} ${name}`);
    if (!passed) allGood = false;
  }
  
  return allGood;
}

// Fonction pour vérifier package.json
function checkPackageJson() {
  console.log('\n📦 Vérification de package.json...\n');
  
  const packagePath = path.join(PROJECT_ROOT, 'package.json');
  if (!fileExists(packagePath)) {
    console.log('   ❌ package.json introuvable');
    return false;
  }
  
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  
  const checks = {
    hasVitePWA: packageJson.devDependencies && 
                 ('vite-plugin-pwa' in packageJson.devDependencies),
    hasPWAScripts: packageJson.scripts && 
                   ('pwa:generate-assets' in packageJson.scripts || 
                    'pwa:build' in packageJson.scripts),
  };
  
  let allGood = true;
  for (const [name, passed] of Object.entries(checks)) {
    console.log(`   ${passed ? '✅' : '❌'} ${name}`);
    if (!passed) allGood = false;
  }
  
  return allGood;
}

// Fonction pour vérifier le build
function checkBuild() {
  console.log('\n🏗️ Vérification du build...\n');
  
  if (!fileExists(DIST_DIR)) {
    console.log('   ⚠️  Le dossier dist/ n\'existe pas. Exécutez "npm run build" d\'abord.');
    return null;
  }
  
  const buildFiles = {
    manifest: path.join(DIST_DIR, 'manifest.webmanifest'),
    serviceWorker: path.join(DIST_DIR, 'sw.js'),
    registerSW: path.join(DIST_DIR, 'registerSW.js'),
    workbox: fs.readdirSync(DIST_DIR).find(f => f.includes('workbox')),
  };
  
  let allGood = true;
  for (const [name, filePath] of Object.entries(buildFiles)) {
    if (filePath) {
      const exists = fileExists(filePath);
      console.log(`   ${exists ? '✅' : '❌'} ${name}`);
      if (!exists) allGood = false;
    }
  }
  
  return allGood;
}

// Fonction principale
function main() {
  console.log('='.repeat(60));
  console.log('🚀 Oasis Resort PWA - Vérification de déploiement');
  console.log('='.repeat(60));
  console.log();
  
  // Vérifier la configuration
  const pwaConfig = checkPWAConfiguration();
  const viteConfig = checkViteConfig();
  const indexHtml = checkIndexHtml();
  const packageJson = checkPackageJson();
  const build = checkBuild();
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 RÉSULTATS');
  console.log('='.repeat(60));
  
  const allChecks = [
    { name: 'Fichiers PWA de base', passed: pwaConfig.allGood },
    { name: 'Configuration Vite', passed: viteConfig },
    { name: 'index.html', passed: indexHtml },
    { name: 'package.json', passed: packageJson },
    { name: 'Build', passed: build === null ? null : build },
  ];
  
  let overallSuccess = true;
  for (const check of allChecks) {
    if (check.passed === false) {
      overallSuccess = false;
      console.log(`   ❌ ${check.name}`);
    } else if (check.passed === null) {
      console.log(`   ⚠️  ${check.name} (non vérifié)`);
    } else {
      console.log(`   ✅ ${check.name}`);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  
  if (overallSuccess && pwaConfig.allGood) {
    console.log('✅ TOUT EST PRÊT !');
    console.log('='.repeat(60));
    console.log('\n🎉 Votre PWA Oasis Resort est complètement configurée !');
    console.log('\n📝 Prochaines étapes :');
    console.log('   1. Générez les icônes manquantes (voir ci-dessus)');
    console.log('   2. Exécutez : npm run build');
    console.log('   3. Déployez le dossier dist/');
    console.log('   4. Testez sur mobile');
  } else {
    console.log('⚠️  CERTAINES CONFIGURATIONS MANQUENT');
    console.log('='.repeat(60));
    console.log('\n📋 Vérifiez les éléments marqués ❌ ci-dessus.');
    console.log('\n💡 Conseils :');
    
    if (!pwaConfig.allGood) {
      console.log('   - Générez les icônes PWA avec :');
      console.log('     npm install sharp');
      console.log('     npm run pwa:generate-assets');
      console.log('   - Ou utilisez un générateur en ligne:');
      console.log('     https://realfavicongenerator.net/');
    }
    
    if (!viteConfig) {
      console.log('   - Installez vite-plugin-pwa:');
      console.log('     npm install vite-plugin-pwa -D');
    }
    
    if (!indexHtml) {
      console.log('   - Vérifiez les meta tags dans index.html');
    }
    
    if (!packageJson) {
      console.log('   - Ajoutez les scripts PWA dans package.json');
    }
  }
  
  // Afficher les icônes manquantes
  if (!pwaConfig.allGood) {
    console.log('\n📁 Fichiers manquants dans public/ :');
    for (const [file, exists] of Object.entries(pwaConfig.results)) {
      if (!exists) {
        console.log(`   - ${file}`);
      }
    }
  }
  
  console.log('\n' + '='.repeat(60));
}

// Exécuter
main();
