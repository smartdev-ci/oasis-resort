/**
 * Script pour générer les assets PWA (icônes et splash screens)
 * Nécessite Node.js et le package 'sharp' pour le traitement d'images
 * 
 * Installation: npm install sharp
 * Exécution: node scripts/generate-pwa-assets.js
 */

const fs = require('fs');
const path = require('path');

// Vérifier si sharp est installé
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('❌ Le package "sharp" est requis. Installez-le avec: npm install sharp');
  process.exit(1);
}

// Configuration
const CONFIG = {
  // Chemin vers le logo source
  sourceLogo: path.join(__dirname, '..', 'public', 'Logo_oasisressort.png'),
  
  // Dossier de sortie
  outputDir: path.join(__dirname, '..', 'public'),
  
  // Couleurs de la marque
  themeColor: '#1A3A2A',
  backgroundColor: '#FAF8F3',
  
  // Icônes à générer
  icons: [
    { name: 'pwa-192x192.png', width: 192, height: 192, purpose: 'Android launcher icon' },
    { name: 'pwa-512x512.png', width: 512, height: 512, purpose: 'Android high-res icon' },
    { name: 'pwa-512x512-maskable.png', width: 512, height: 512, purpose: 'Android maskable icon', maskable: true },
    { name: 'pwa-apple-touch-icon.png', width: 180, height: 180, purpose: 'iOS touch icon' },
    { name: 'favicon-32x32.png', width: 32, height: 32, purpose: 'Favicon small' },
    { name: 'favicon-16x16.png', width: 16, height: 16, purpose: 'Favicon tiny' },
  ],
  
  // Splash screens iOS à générer
  splashScreens: [
    { name: 'splash-apple-640x1136.png', width: 640, height: 1136, device: 'iPhone 5/5S/5C/SE' },
    { name: 'splash-apple-750x1334.png', width: 750, height: 1334, device: 'iPhone 6/6S/7/8/SE2' },
    { name: 'splash-apple-1242x2208.png', width: 1242, height: 2208, device: 'iPhone 6+/6S+/7+/8+' },
    { name: 'splash-apple-1125x2436.png', width: 1125, height: 2436, device: 'iPhone X/XS/11/12/13/14/15' },
    { name: 'splash-apple-1536x2048.png', width: 1536, height: 2048, device: 'iPad Mini / iPad Air' },
    { name: 'splash-apple-1668x2224.png', width: 1668, height: 2224, device: 'iPad Pro 10.5"' },
    { name: 'splash-apple-2048x2732.png', width: 2048, height: 2732, device: 'iPad Pro 12.9"' },
  ],
  
  // Icônes pour les shortcuts
  shortcutIcons: [
    { name: 'icon-search.png', width: 96, height: 96, icon: '🔍' },
    { name: 'icon-bookings.png', width: 96, height: 96, icon: '📋' },
    { name: 'icon-ai.png', width: 96, height: 96, icon: '🤖' },
  ],
};

// Fonction pour créer un canevas avec fond
async function createCanvas(width, height, backgroundColor) {
  return sharp({
    create: {
      width: width,
      height: height,
      channels: 4,
      background: backgroundColor,
    },
  });
}

// Fonction pour générer une icône
async function generateIcon(sourcePath, outputPath, width, height, options = {}) {
  const { maskable = false } = options;
  
  try {
    let image = sharp(sourcePath);
    
    // Redimensionner
    image = image.resize(width, height, {
      fit: 'contain',
      background: CONFIG.backgroundColor,
    });
    
    // Pour les icônes maskable, ajouter un padding pour l'adapter à un cercle
    if (maskable) {
      // Créer un cercle transparent
      const circleSize = Math.min(width, height);
      const circle = Buffer.from(`
        <svg width="${circleSize}" height="${circleSize}" viewBox="0 0 ${circleSize} ${circleSize}">
          <circle cx="${circleSize / 2}" cy="${circleSize / 2}" r="${circleSize / 2}" fill="${CONFIG.themeColor}"/>
        </svg>
      `);
      
      // Composite avec l'image
      image = image.composite([
        { input: circle, blend: 'dest-in' }
      ]);
    }
    
    // Sauvegarder
    await image.toFile(outputPath);
    console.log(`✅ Généré: ${outputPath}`);
    return true;
  } catch (error) {
    console.error(`❌ Erreur lors de la génération de ${outputPath}:`, error.message);
    return false;
  }
}

// Fonction pour générer un splash screen
async function generateSplashScreen(outputPath, width, height) {
  try {
    // Créer un canevas avec le fond
    let image = await createCanvas(width, height, CONFIG.backgroundColor);
    
    // Charger le logo
    const logo = sharp(CONFIG.sourceLogo);
    const logoMetadata = await logo.metadata();
    
    // Calculer la position du logo (centré en haut)
    const logoSize = Math.min(width * 0.4, height * 0.3);
    const topMargin = height * 0.15;
    
    // Redimensionner le logo
    const resizedLogo = await logo
      .resize(Math.round(logoSize), Math.round(logoSize), {
        fit: 'contain',
      })
      .toBuffer();
    
    // Composite avec le logo
    image = image.composite([
      {
        input: resizedLogo,
        top: Math.round(topMargin),
        left: Math.round((width - logoSize) / 2),
      },
    ]);
    
    // Ajouter le nom de l'application
    const textHeight = height * 0.08;
    const textTop = topMargin + logoSize + height * 0.05;
    
    // Créer du texte (simplifié - pour une meilleure qualité, utilisez un générateur en ligne)
    // Pour l'instant, nous allons juste sauvegarder le canevas avec le logo
    await image.toFile(outputPath);
    console.log(`✅ Généré: ${outputPath}`);
    return true;
  } catch (error) {
    console.error(`❌ Erreur lors de la génération de ${outputPath}:`, error.message);
    return false;
  }
}

// Fonction pour générer une icône de shortcut
async function generateShortcutIcon(outputPath, width, height, emoji) {
  try {
    // Créer un canevas avec le fond
    let image = await createCanvas(width, height, CONFIG.backgroundColor);
    
    // Ajouter l'emoji (simplifié)
    // Pour une meilleure qualité, utilisez un générateur d'icônes
    const composite = { input: Buffer.from(''), top: 0, left: 0 };
    
    await image.toFile(outputPath);
    console.log(`✅ Généré (à personnaliser): ${outputPath}`);
    console.log(`   → Ajoutez manuellement l'icône pour: ${emoji}`);
    return true;
  } catch (error) {
    console.error(`❌ Erreur lors de la génération de ${outputPath}:`, error.message);
    return false;
  }
}

// Fonction principale
async function main() {
  console.log('🚀 Génération des assets PWA pour Oasis Resort...\n');
  
  // Vérifier que le logo source existe
  if (!fs.existsSync(CONFIG.sourceLogo)) {
    console.error(`❌ Logo source introuvable: ${CONFIG.sourceLogo}`);
    console.error('   Vérifiez que Logo_oasisressort.png existe dans public/');
    process.exit(1);
  }
  
  // Créer le dossier de sortie s'il n'existe pas
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }
  
  let successCount = 0;
  let totalCount = CONFIG.icons.length + CONFIG.splashScreens.length + CONFIG.shortcutIcons.length;
  
  // Générer les icônes
  console.log('📱 Génération des icônes...');
  for (const icon of CONFIG.icons) {
    const outputPath = path.join(CONFIG.outputDir, icon.name);
    if (await generateIcon(CONFIG.sourceLogo, outputPath, icon.width, icon.height, icon)) {
      successCount++;
    }
  }
  
  // Générer les splash screens
  console.log('\n📱 Génération des splash screens iOS...');
  for (const splash of CONFIG.splashScreens) {
    const outputPath = path.join(CONFIG.outputDir, splash.name);
    if (await generateSplashScreen(outputPath, splash.width, splash.height)) {
      successCount++;
    }
  }
  
  // Générer les icônes de shortcuts
  console.log('\n📱 Génération des icônes de shortcuts...');
  for (const shortcut of CONFIG.shortcutIcons) {
    const outputPath = path.join(CONFIG.outputDir, shortcut.name);
    if (await generateShortcutIcon(outputPath, shortcut.width, shortcut.height, shortcut.icon)) {
      successCount++;
    }
  }
  
  // Résumé
  console.log('\n' + '='.repeat(50));
  console.log(`📊 Résumé: ${successCount}/${totalCount} fichiers générés avec succès`);
  console.log('='.repeat(50));
  
  if (successCount === totalCount) {
    console.log('\n✅ Tous les assets PWA ont été générés !');
    console.log('\n📝 Prochaines étapes:');
    console.log('   1. Vérifiez les fichiers générés dans public/');
    console.log('   2. Pour les splash screens, vous pouvez les personnaliser manuellement');
    console.log('   3. Pour les icônes de shortcuts, ajoutez les emojis/icônes appropriés');
    console.log('   4. Testez avec: npm run dev');
  } else {
    console.log('\n⚠️ Certains fichiers n\'ont pas pu être générés.');
    console.log('   Consultez les erreurs ci-dessus pour plus de détails.');
  }
}

// Exécuter
main().catch((error) => {
  console.error('❌ Erreur fatale:', error);
  process.exit(1);
});
