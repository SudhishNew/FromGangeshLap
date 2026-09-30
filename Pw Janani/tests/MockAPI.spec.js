import { test, expect } from "@playwright/test";

test("Mock API Testing", async ({ page }) => {
  await page.route("*", (route) => {
    const response = route.fetch();
    const json = response.json();
    route.fulfill({ response, json });
  });
  await page.goto("https://demo.playwright.dev/api-mocking/");

  await page.waitForTimeout(3000);
});
