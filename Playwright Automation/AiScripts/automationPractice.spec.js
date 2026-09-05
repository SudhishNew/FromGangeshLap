const path = require('path');
const { test, expect } = require('@playwright/test');

const baseURL = 'https://testautomationpractice.blogspot.com/';

test.describe('Automation Testing Practice site', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseURL);
    await expect(page).toHaveTitle(/Automation Testing Practice/i);
  });

  test('loads the home page and shows the main heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Automation Testing Practice' })).toBeVisible();
    await expect(page.getByText('For Selenium, Cypress & Playwright')).toBeVisible();
  });

  test('shows the main navigation links', async ({ page }) => {
    const nav = page.locator('#PageList2');
    await expect(nav).toBeVisible();
    const links = nav.getByRole('link');
    await expect(links).toHaveCount(5);
    await expect(nav).toContainText('Home');
    await expect(nav).toContainText('PlaywrightPractice');
    await expect(nav).toContainText('Blog');
  });

  test('accepts values in the data entry form', async ({ page }) => {
    await page.getByPlaceholder('Enter Name').fill('John Doe');
    await page.getByPlaceholder('Enter EMail').fill('john.doe@example.com');
    await page.getByPlaceholder('Enter Phone').fill('9876543210');
    await page.getByLabel('Address:').fill('123 Main Street');

    await page.locator('#male').check();
    await page.getByRole('checkbox', { name: 'Sunday' }).check();
    await page.getByRole('checkbox', { name: 'Monday' }).check();

    await page.locator('select').first().selectOption('India');

    await expect(page.getByPlaceholder('Enter Name')).toHaveValue('John Doe');
    await expect(page.getByPlaceholder('Enter EMail')).toHaveValue('john.doe@example.com');
    await expect(page.locator('#male')).toBeChecked();
  });

  test('verifies the static web table content', async ({ page }) => {
    const table = page.locator('table').first();
    await expect(table).toBeVisible();
    await expect(table).toContainText('Learn Selenium');
    await expect(table).toContainText('Amit');
    await expect(table).toContainText('300');
    await expect(table).toContainText('Master In Selenium');
  });

  test('handles a simple alert', async ({ page }) => {
    page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('I am an alert box!');
      await dialog.accept();
    });

    await page.getByRole('button', { name: 'Simple Alert' }).click();
  });

  test('handles a prompt alert with user input', async ({ page }) => {
    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('prompt');
      await dialog.accept('Playwright');
    });

    await page.getByRole('button', { name: 'Prompt Alert' }).click();
  });

  test('copies field text on double click', async ({ page }) => {
    await page.locator('#field1').fill('Hello World');
    await page.getByRole('button', { name: 'Copy Text' }).dblclick();
    await expect(page.locator('#field2')).toHaveValue('Hello World');
  });

  test('accepts a file selection from the workspace', async ({ page }) => {
    const filePath = path.join(__dirname, '..', 'myDir', 'myFile', 'demo.txt');
    const input = page.locator('input[type="file"]').first();
    await input.setInputFiles(filePath);

    const fileCount = await input.evaluate(el => el.files ? el.files.length : 0);
    expect(fileCount).toBeGreaterThan(0);
  });
});
