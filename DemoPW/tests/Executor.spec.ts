import { test, expect } from '@playwright/test';

const baseUrl = 'https://automationexercise.com';

test.describe('Automation Exercise planner suite', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto(baseUrl);
    await expect(page).toHaveTitle(/Automation Exercise/);
    await expect(page.locator('a[href="/"]')).toBeVisible();
  });
});
