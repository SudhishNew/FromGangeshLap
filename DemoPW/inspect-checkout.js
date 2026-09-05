const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://automationexercise.com/products', { waitUntil: 'networkidle' });
  await page.locator('a[data-product-id="1"]').first().click();
  await page.locator('a[href="/view_cart"]').nth(1).click();
  console.log('CART TITLE', await page.title());
  console.log('CART BODY', (await page.locator('body').innerText()).slice(0, 2000));

  const checkoutLink = page.locator('a.btn.btn-default.check_out');
  console.log('checkout link count', await checkoutLink.count());
  if (await checkoutLink.count()) {
    console.log('checkout link visible', await checkoutLink.isVisible());
    await checkoutLink.click();
    await page.waitForLoadState('domcontentloaded');
    console.log('AFTER CHECKOUT TITLE', await page.title());
    console.log('AFTER CHECKOUT BODY', (await page.locator('body').innerText()).slice(0, 2500));
    console.log('inputs', await page.locator('input').evaluateAll(els => els.map(e => ({ placeholder: e.placeholder, name: e.name, id: e.id, dataqa: e.getAttribute('data-qa'), type: e.type, value: e.value })).slice(0, 50)));
  }

  await browser.close();
})().catch(err => {
  console.error(err);
  process.exit(1);
});
