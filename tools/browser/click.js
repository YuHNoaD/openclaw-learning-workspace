// tools/browser/click.js
// Click on element by selector
import { chromium } from 'playwright';

(async () => {
  const url = process.argv[2];
  const selector = process.argv[3];

  if (!url || !selector) {
    console.error('Usage: node click.js <url> <selector>');
    process.exit(1);
  }

  console.log(`👆 Clicking: ${selector} on ${url}`);

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });

  try {
    await page.click(selector);
    console.log('✅ Clicked successfully');

    // Wait for navigation or action
    await page.waitForTimeout(2000);

    // Return new URL
    console.log(`📍 Current URL: ${page.url()}`);
  } catch (error) {
    console.error('❌ Click failed:', error.message);
  }

  await browser.close();
})();
