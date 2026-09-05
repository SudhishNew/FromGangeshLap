const { test, expect } = require('@playwright/test');

test('Amazon login page sample', async ({ page }) => {
  await page.goto('https://www.amazon.in/', { waitUntil: 'domcontentloaded' });

  await page.getByRole('link', { name: /sign in/i }).click();

  await page.locator('#ap_email').fill('your-email@example.com');
  await page.locator('#continue').click();

  await expect(page.locator('#ap_password')).toBeVisible();

  await page.locator('#ap_password').fill('your-password');
  await page.locator('#signInSubmit').click();

  await expect(page).toHaveURL(/amazon\.in/);
});
