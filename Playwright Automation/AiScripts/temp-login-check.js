const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  page.on('dialog', async dialog => {
    console.log('DIALOG', dialog.type(), dialog.message());
    await dialog.accept();
  });
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.locator('#username').fill('rahulshettyacademy');
  await page.locator('#password').fill('Learning@830$3mK2');
  await page.locator('#usertype[value="admin"]').check();
  await page.locator('#terms').check();
  await page.locator('#signInBtn').click();
  await page.waitForTimeout(4000);
  console.log('url after', page.url());
  console.log('body text', (await page.locator('body').innerText()).slice(0, 500));
  await browser.close();
})();
