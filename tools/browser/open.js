// tools/browser/open.js
// Open URL in browser (visible mode for debugging)
import { chromium } from 'playwright';

(async () => {
  const url = process.argv[2];
  const headless = process.argv[3] === 'headless';

  if (!url) {
    console.error('Usage: node open.js <url> [headless]');
    process.exit(1);
  }

  console.log(`🌐 Opening: ${url}`);

  const browser = await chromium.launch({
    headless: headless,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Set viewport
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Navigate
  await page.goto(url, { waitUntil: 'networkidle' });

  console.log('✅ Page loaded');

  // Keep browser open for 10 seconds (or until closed in non-headless)
  if (!headless) {
    console.log('👀 Browser will stay open. Close manually or wait 30s...');
    await page.waitForTimeout(30000);
  } else {
    await page.waitForTimeout(5000);
  }

  await browser.close();
  console.log('✅ Done');
})();
