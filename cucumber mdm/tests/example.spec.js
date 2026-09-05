// @ts-check
import { test, expect } from '@playwright/test';

Given('user should be in login page', async ({ page }) => {
  await page.goto('/dashboard');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

when('User enters the valid username "mukesh@123" and valid password "Mukesh@1456" ', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
