const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://automationexercise.com/login', { waitUntil: 'domcontentloaded' });
  console.log('email input count', await page.locator('input[name="email"]').count());
  console.log('email input visible', await page.locator('input[name="email"]').first().isVisible());
  console.log('password input visible', await page.locator('input[name="password"]').isVisible());
  console.log('buttons', await page.locator('button').evaluateAll(els => els.map(e => e.textContent.trim()).filter(Boolean)));

  await page.goto('https://automationexercise.com/contact_us', { waitUntil: 'domcontentloaded' });
  console.log('submit button count', await page.locator('input[data-qa="submit-button"]').count());
  console.log('submit button visible', await page.locator('input[data-qa="submit-button"]').isVisible());

  await browser.close();
})().catch(err => {
  console.error(err);
  process.exit(1);
});
