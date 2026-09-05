const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/loginPage');

test.describe('Rahul Shetty Academy login page POM', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.assertPageLoaded();
  });

  test('loads the login page correctly', async ({ page }) => {
    await expect(page).toHaveTitle(/LoginPage Practise/i);
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.signInButton).toBeVisible();
  });

  test('logs in successfully with valid credentials', async ({ page }) => {
    await loginPage.login({
      username: 'rahulshettyacademy',
      password: 'Learning@830$3mK2',
      role: 'admin',
      termsAccepted: true,
    });

    await expect(page.locator('body')).toContainText('rahulshettyacademy');
  });

  test('rejects invalid credentials', async ({ page }) => {
    await loginPage.login({
      username: 'wronguser',
      password: 'wrongpass',
      role: 'admin',
      termsAccepted: true,
    });

    await expect(page.locator('body')).toContainText('Incorrect');
  });

  test('requires the terms checkbox', async ({ page }) => {
    await loginPage.login({
      username: 'rahulshettyacademy',
      password: 'Learning@830$3mK2',
      role: 'admin',
      termsAccepted: false,
    });

    await expect(page.locator('body')).toContainText('terms');
  });

  test('allows switching between Admin and User roles', async ({ page }) => {
    await expect(loginPage.adminRadio).toBeChecked();
    await loginPage.userRadio.check();
    await expect(loginPage.userRadio).toBeChecked();
  });

  test('allows selecting a dropdown option', async ({ page }) => {
    await loginPage.selectDropdownOption('Teacher');
    await expect(loginPage.dropdown).toContainText('Teacher');
  });
});
