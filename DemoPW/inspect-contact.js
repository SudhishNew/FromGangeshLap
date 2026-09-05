const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  page.on('dialog', async dialog => {
    console.log('DIALOG', dialog.message());
    await dialog.accept();
  });
  page.on('console', msg => console.log('CONSOLE', msg.type(), msg.text()));

  await page.goto('https://automationexercise.com/contact_us', { waitUntil: 'networkidle' });
  await page.locator('input[data-qa="name"]').fill('QA Tester');
  await page.locator('input[data-qa="email"]').fill('qa@example.com');
  await page.locator('input[data-qa="subject"]').fill('Automation test');
  await page.locator('textarea[data-qa="message"]').fill('Hello');
  const submit = page.locator('input[data-qa="submit-button"]');
  console.log('submit visible', await submit.isVisible());
  await submit.click({ timeout: 10000 });
  await page.waitForTimeout(2000);
  console.log('After click url', page.url());
  console.log('Body text', (await page.locator('body').innerText()).slice(0,1000));
  await browser.close();
})().catch(err => {
  console.error(err);
  process.exit(1);
});
