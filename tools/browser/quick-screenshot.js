// tools/browser/quick-screenshot.js
// Quick screenshot with shorter timeout
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workspaceRoot = path.resolve(__dirname, '..', '..');

(async () => {
  const url = process.argv[2];
  const out = process.argv[3] || path.join(workspaceRoot, 'screenshots', `quick-${Date.now()}.png`);

  if (!url) {
    console.error('Usage: node quick-screenshot.js <url> [output.png]');
    process.exit(1);
  }

  console.log(`📸 Quick screenshot: ${url}`);

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });

  try {
    // Use 'load' instead of 'networkidle' for faster load
    await page.goto(url, { waitUntil: 'load', timeout: 15000 });

    // Wait a bit for JS to render
    await page.waitForTimeout(3000);

    const outDir = path.dirname(out);
    if (outDir && !fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    await page.screenshot({
      path: out,
      fullPage: false
    });

    console.log(`✅ Screenshot saved: ${out}`);
  } catch (error) {
    console.error('❌ Error:', error.message);

    // Try to save what we have
    try {
      await page.screenshot({ path: out });
      console.log(`⚠️ Partial screenshot saved: ${out}`);
    } catch (e) {
      console.error('Could not save partial screenshot');
    }
  }

  await browser.close();
})();
