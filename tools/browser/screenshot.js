// tools/browser/screenshot.js
// Take full-page screenshot of URL
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workspaceRoot = path.resolve(__dirname, '..', '..');

(async () => {
  const url = process.argv[2];
  const out = process.argv[3] || path.join(workspaceRoot, 'screenshots', `screenshot-${Date.now()}.png`);

  if (!url) {
    console.error('Usage: node screenshot.js <url> [output.png]');
    process.exit(1);
  }

  console.log(`📸 Screenshotting: ${url}`);

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.goto(url, { waitUntil: 'load', timeout: 15000 });
  await page.waitForTimeout(2000);

  // Ensure output directory exists
  const outDir = path.dirname(out);
  if (outDir && !fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  await page.screenshot({
    path: out,
    fullPage: true
  });

  await browser.close();

  console.log(`✅ Screenshot saved: ${out}`);
})();
