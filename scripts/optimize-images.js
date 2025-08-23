const fs = require('fs');
const path = require('path');

function copyImages() {
  try {
    console.log('🖼️  Starting image processing...');
    
    // Ensure dist/assets/img directory exists
    const distImgDir = path.join(__dirname, '..', 'dist', 'assets', 'img');
    if (!fs.existsSync(distImgDir)) {
      fs.mkdirSync(distImgDir, { recursive: true });
    }
    
    // Get all image files from assets/img
    const sourceImgDir = path.join(__dirname, '..', 'assets', 'img');
    const imageFiles = fs.readdirSync(sourceImgDir).filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.svg', '.webp'].includes(ext);
    });
    
    if (imageFiles.length === 0) {
      console.log('ℹ️  No image files found');
      return;
    }
    
    console.log(`📁 Found ${imageFiles.length} image files to process`);
    
    // Copy each image
    for (const file of imageFiles) {
      const sourcePath = path.join(sourceImgDir, file);
      const destPath = path.join(distImgDir, file);
      
      try {
        fs.copyFileSync(sourcePath, destPath);
        const fileSize = (fs.statSync(sourcePath).size / 1024).toFixed(1);
        console.log(`✅ ${file}: ${fileSize}KB copied`);
      } catch (error) {
        console.log(`⚠️  Could not copy ${file}: ${error.message}`);
      }
    }
    
    console.log('🎉 Image processing completed!');
    
  } catch (error) {
    console.error('❌ Image processing failed:', error);
    process.exit(1);
  }
}

copyImages();
