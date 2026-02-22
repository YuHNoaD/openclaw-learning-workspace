// tools/browser/snapshot.js
// Capture UI snapshot for designer agent to analyze
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workspaceRoot = path.resolve(__dirname, '..', '..');

(async () => {
  const url = process.argv[2];
  const outDir = process.argv[3] || path.join(workspaceRoot, 'screenshots');

  if (!url) {
    console.error('Usage: node snapshot.js <url> [output_dir]');
    process.exit(1);
  }

  console.log(`📸 UI Snapshot: ${url}`);

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(url, { waitUntil: 'networkidle' });

  // Create output directory
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Generate timestamp
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const baseName = `${outDir}/snapshot-${timestamp}`;

  // 1. Full page screenshot
  await page.screenshot({
    path: `${baseName}-full.png`,
    fullPage: true
  });
  console.log(`✅ Screenshot: ${baseName}-full.png`);

  // 2. Desktop screenshot
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.screenshot({
    path: `${baseName}-desktop.png`
  });
  console.log(`✅ Desktop: ${baseName}-desktop.png`);

  // 3. Mobile screenshot
  await page.setViewportSize({ width: 375, height: 667 });
  await page.screenshot({
    path: `${baseName}-mobile.png`
  });
  console.log(`✅ Mobile: ${baseName}-mobile.png`);

  // 4. Extract UI metadata
  const uiMetadata = await page.evaluate(() => {
    const getStyles = (el) => {
      const styles = window.getComputedStyle(el);
      return {
        backgroundColor: styles.backgroundColor,
        color: styles.color,
        fontSize: styles.fontSize,
        fontFamily: styles.fontFamily,
        padding: styles.padding,
        margin: styles.margin
      };
    };

    const extractElements = () => {
      const elements = [];

      // Headings
      document.querySelectorAll('h1, h2, h3').forEach(h => {
        elements.push({
          type: h.tagName,
          text: h.innerText.trim().substring(0, 100),
          styles: getStyles(h)
        });
      });

      // Buttons
      document.querySelectorAll('button, a[role="button"], .btn').forEach(btn => {
        elements.push({
          type: 'button',
          text: btn.innerText.trim().substring(0, 50),
          styles: getStyles(btn)
        });
      });

      // Inputs
      document.querySelectorAll('input, textarea').forEach(input => {
        elements.push({
          type: 'input',
          inputType: input.type || input.tagName,
          placeholder: input.placeholder || '',
          styles: getStyles(input)
        });
      });

      return elements;
    };

    return {
      title: document.title,
      url: window.location.href,
      elements: extractElements(),
      colors: {
        primary: getStyles(document.body).backgroundColor
      }
    };
  });

  // Save metadata
  fs.writeFileSync(`${baseName}-metadata.json`, JSON.stringify(uiMetadata, null, 2));
  console.log(`✅ Metadata: ${baseName}-metadata.json`);

  await browser.close();

  console.log('\n📊 UI Snapshot Complete!');
  console.log('   Files saved to:', outDir);
})();
