const fs = require('fs');
const path = require('path');

// Read the original HTML file
const htmlPath = path.join(__dirname, '..', 'index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Replace CSS references with minified versions
let processedHtml = htmlContent
  .replace('assets/css/style.css', 'assets/css/style.min.css')
  .replace('assets/css/stars-review.css', 'assets/css/stars-review.min.css')
  .replace('assets/css/chart.css', 'assets/css/chart.min.css')
  .replace('assets/css/table.css', 'assets/css/table.min.css');

// Replace JS references with minified versions
processedHtml = processedHtml
  .replace('assets/js/main.js', 'assets/js/main.min.js')
  .replace('assets/js/navbar.js', 'assets/js/navbar.min.js');

// Ensure dist directory exists
const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Write the processed HTML to dist folder
const distHtmlPath = path.join(distDir, 'index.html');
fs.writeFileSync(distHtmlPath, processedHtml);

console.log('✅ HTML file processed and copied to dist/');
console.log('📁 CSS and JS references updated to minified versions');
