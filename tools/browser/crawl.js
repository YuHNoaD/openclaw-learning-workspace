// tools/browser/crawl.js
// Crawl page and extract content
import { chromium } from 'playwright';

(async () => {
  const url = process.argv[2];
  const selector = process.argv[3] || 'body';

  if (!url) {
    console.error('Usage: node crawl.js <url> [selector]');
    process.exit(1);
  }

  console.log(`🕷️ Crawling: ${url}`);

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });

  // Extract content
  const content = await page.evaluate((sel) => {
    const element = document.querySelector(sel);
    return element ? element.innerText : '';
  }, selector);

  console.log('📄 Content:');
  console.log('---');
  console.log(content);
  console.log('---');

  // Extract links
  const links = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a'))
      .map(a => ({ text: a.innerText.trim(), href: a.href }))
      .filter(l => l.href && l.text);
  });

  console.log(`\n🔗 Links found: ${links.length}`);

  await browser.close();
})();
