// tools/browser/fill.js
// Fill form field with text
import { chromium } from 'playwright';

(async () => {
  const url = process.argv[2];
  const selector = process.argv[3];
  const value = process.argv[4];

  if (!url || !selector || !value) {
    console.error('Usage: node fill.js <url> <selector> <value>');
    process.exit(1);
  }

  console.log(`✏️ Filling: ${selector} with "${value}"`);

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });

  try {
    await page.fill(selector, value);
    console.log('✅ Filled successfully');
  } catch (error) {
    console.error('❌ Fill failed:', error.message);
  }

  await browser.close();
})();
