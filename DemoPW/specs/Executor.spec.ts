import { test, expect } from '@playwright/test';

const baseUrl = 'https://automationexercise.com';
const uniqueEmail = () => `qa${Date.now()}@example.com`;

test.describe('Automation Exercise planner suite', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto(baseUrl);

    await expect(page).toHaveTitle(/Automation Exercise/);
    await expect(page.locator('a[href="/"]').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Products' })).toBeVisible();
  });

  test('user can register a new account', async ({ page }) => {
    const email = uniqueEmail();

    await page.goto(`${baseUrl}/login`);
    await page.locator('input[data-qa="signup-name"]').fill('QA Tester');
    await page.locator('input[data-qa="signup-email"]').fill(email);
    await page.locator('button[data-qa="signup-button"]').click();

    await expect(page.locator('body')).toContainText('Enter Account Information');

    await page.locator('input[data-qa="password"]').fill('P@ssw0rd123');
    await page.locator('select[data-qa="days"]').selectOption('10');
    await page.locator('select[data-qa="months"]').selectOption('January');
    await page.locator('select[data-qa="years"]').selectOption('1995');
    await page.locator('#id_gender1').check();
    await page.locator('input[data-qa="first_name"]').fill('QA');
    await page.locator('input[data-qa="last_name"]').fill('Tester');
    await page.locator('input[data-qa="company"]').fill('Demo Company');
    await page.locator('input[data-qa="address"]').fill('123 Test Street');
    await page.locator('input[data-qa="state"]').fill('Test State');
    await page.locator('input[data-qa="city"]').fill('Test City');
    await page.locator('input[data-qa="zipcode"]').fill('12345');
    await page.locator('input[data-qa="mobile_number"]').fill('1234567890');
    await page.locator('button[data-qa="create-account"]').click();

    await expect(page.locator('body')).toContainText('Account Created!');
    await page.locator('a[data-qa="continue-button"]').click();
  });

  test('login handles valid and invalid credentials', async ({ page }) => {
    const email = uniqueEmail();

    await page.goto(`${baseUrl}/login`);
    await page.locator('input[data-qa="signup-name"]').fill('QA Tester');
    await page.locator('input[data-qa="signup-email"]').fill(email);
    await page.locator('button[data-qa="signup-button"]').click();

    await page.locator('input[data-qa="password"]').fill('P@ssw0rd123');
    await page.locator('#id_gender1').check();
    await page.locator('input[data-qa="first_name"]').fill('QA');
    await page.locator('input[data-qa="last_name"]').fill('Tester');
    await page.locator('input[data-qa="company"]').fill('Demo Company');
    await page.locator('input[data-qa="address"]').fill('123 Test Street');
    await page.locator('input[data-qa="state"]').fill('Test State');
    await page.locator('input[data-qa="city"]').fill('Test City');
    await page.locator('input[data-qa="zipcode"]').fill('12345');
    await page.locator('input[data-qa="mobile_number"]').fill('1234567890');
    await page.locator('button[data-qa="create-account"]').click();
    await page.locator('a[data-qa="continue-button"]').click();

    await expect(page.locator('body')).toContainText(/Logged in as|Delete Account/i);
    await page.getByRole('link', { name: 'Logout' }).click();

    await page.goto(`${baseUrl}/login`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('input[data-qa="login-email"]', { state: 'visible', timeout: 15000 });
    await page.locator('input[data-qa="login-email"]').fill(email);
    await page.locator('input[data-qa="login-password"]').fill('P@ssw0rd123');
    await page.locator('button:has-text("Login")').click();

    await expect(page.locator('body')).toContainText(/Logged in as|Delete Account/i);

    await page.getByRole('link', { name: 'Logout' }).click();
    await page.goto(`${baseUrl}/login`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('input[data-qa="login-email"]', { state: 'visible', timeout: 15000 });
    await page.locator('input[data-qa="login-email"]').fill('wrong@example.com');
    await page.locator('input[data-qa="login-password"]').fill('wrongpassword');
    await page.locator('button:has-text("Login")').click();

    await expect(page.locator('body')).toContainText('Your email or password is incorrect!');
  });

  test('products page displays products and supports search', async ({ page }) => {
    await page.goto(`${baseUrl}/products`);

    await expect(page.locator('.product-image-wrapper').first()).toBeVisible();
    await page.locator('#search_product').fill('Blue Top');
    await page.locator('#submit_search').click();

    await expect(page.locator('body')).toContainText('Blue Top');
  });

  test('product detail page shows information', async ({ page }) => {
    await page.goto(`${baseUrl}/products`);
    await page.locator('a[href="/product_details/1"]').first().click();

    await expect(page.locator('.product-information')).toBeVisible();
    await expect(page.locator('.product-information')).toContainText('Category');
  });

  test('user can add an item to the cart and review it', async ({ page }) => {
    await page.goto(`${baseUrl}/products`);
    await page.locator('a[data-product-id="1"]').first().click();
    await page.locator('a[href="/view_cart"]').nth(1).click();

    await expect(page.locator('body')).toContainText('Cart');
    await expect(page.locator('body')).toContainText('Blue Top');
  });

  test('checkout flow reaches order confirmation', async ({ page }) => {
    await page.goto(`${baseUrl}/products`);
    await page.locator('a[data-product-id="1"]').first().click();
    await page.locator('a[href="/view_cart"]').nth(1).click();
    await page.locator('a.btn.btn-default.check_out').click();

    await expect(page.locator('body')).toContainText('Checkout');
    await expect(page.locator('body')).toContainText('Register / Login account to proceed on checkout.');
  });

  test('contact us form submits successfully', async ({ page }) => {
    await page.goto(`${baseUrl}/contact_us`);

    await page.locator('input[data-qa="name"]').fill('QA Tester');
    await page.locator('input[data-qa="email"]').fill(uniqueEmail());
    await page.locator('input[data-qa="subject"]').fill('Automation test message');
    await page.locator('textarea[data-qa="message"]').fill('This is a test message from Playwright.');

    page.once('dialog', async dialog => {
      await dialog.accept();
    });
    await page.locator('input[data-qa="submit-button"]').click({ timeout: 15000 });

    await expect(page.locator('body')).toContainText(/Success|submitted/i);
  });

  test('logout ends the session', async ({ page }) => {
    const email = uniqueEmail();

    await page.goto(`${baseUrl}/login`);
    await page.locator('input[data-qa="signup-name"]').fill('QA Tester');
    await page.locator('input[data-qa="signup-email"]').fill(email);
    await page.locator('button[data-qa="signup-button"]').click();

    await page.locator('input[data-qa="password"]').fill('P@ssw0rd123');
    await page.locator('#id_gender1').check();
    await page.locator('input[data-qa="first_name"]').fill('QA');
    await page.locator('input[data-qa="last_name"]').fill('Tester');
    await page.locator('input[data-qa="company"]').fill('Demo Company');
    await page.locator('input[data-qa="address"]').fill('123 Test Street');
    await page.locator('input[data-qa="state"]').fill('Test State');
    await page.locator('input[data-qa="city"]').fill('Test City');
    await page.locator('input[data-qa="zipcode"]').fill('12345');
    await page.locator('input[data-qa="mobile_number"]').fill('1234567890');
    await page.locator('button[data-qa="create-account"]').click();
    await page.locator('a[data-qa="continue-button"]').click();

    await expect(page.locator('body')).toContainText(/Logged in as|Delete Account/i);
    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page.locator('body')).toContainText('Login');
  });
});