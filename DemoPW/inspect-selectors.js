const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://automationexercise.com/login', { waitUntil: 'networkidle' });
  console.log('login email count', await page.locator('input[data-qa="login-email"]').count());
  console.log('login email visible', await page.locator('input[data-qa="login-email"]').isVisible().catch(e => e.message));
  console.log('login email box', await page.locator('input[data-qa="login-email"]').boundingBox().catch(e => e.message));
  console.log('signup name count', await page.locator('input[data-qa="signup-name"]').count());

  await page.goto('https://automationexercise.com/products', { waitUntil: 'networkidle' });
  console.log('search count', await page.locator('#search_product').count());
  console.log('search visible', await page.locator('#search_product').isVisible().catch(e => e.message));
  console.log('search box', await page.locator('#search_product').boundingBox().catch(e => e.message));
  console.log('buttons', await page.locator('button').evaluateAll(els => els.map(e => e.textContent.trim())).catch(e => e.message));

  await browser.close();
})().catch(err => {
  console.error(err);
  process.exit(1);
});
