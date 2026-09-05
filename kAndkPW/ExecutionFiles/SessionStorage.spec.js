import { test, expect } from "@playwright/test";

test("Login", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  await page.getByRole("link", { name: "Log in" }).click();

  await page.locator("#loginusername").fill("jiouser");
  await page.locator("#loginpassword").fill("jiouser");
  await page.getByRole("button", { name: "Log in" }).click();
  await expect(page.locator("#nameofuser")).toContainText(/Welcome jiouser/);
  await page.context().storageState({ path: "auth.json" });
  await page.waitForTimeout(3000);
});

test("Product Selecting", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  await expect(page.locator("#nameofuser")).toContainText(/Welcome jiouser/);
  await page.getByRole("link", { name: "Nexus" }).click();
    page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole("link", { name: "Add to cart" }).click();
  await page.waitForTimeout(3000);
});

// test("Product Page ", async ({ page }) => {
//   await page.goto("https://www.demoblaze.com/");
//   await expect(page.locator("#nameofuser")).toContainText(/Welcome jiouser/);

//   await page.waitForTimeout(3000);
// });

// test("Add to card", async ({ page }) => {
//   await page.goto("https://www.demoblaze.com/");
//   await expect(page.locator("#nameofuser")).toContainText(/Welcome jiouser/);
//   a
//   await page.waitForTimeout(3000);
// });

test("Form filling", async ({ page }) => {

  await page.goto("https://www.demoblaze.com/");
  await expect(page.locator("#nameofuser")).toContainText(/Welcome jiouser/);
  await page.getByRole("link", { name: "Cart", exact: true }).click();
  await page.getByRole("button", { name: "Place Order" }).click();
  await page.getByRole("textbox", { name: "Total: 650 Name:" }).fill("Sudhish");

  await page.getByRole("textbox", { name: "Country:" }).fill("USA");

  await page.getByRole("textbox", { name: "City:" }).fill("Chennai");

  await page.getByRole("textbox", { name: "Credit card:" }).fill("123456789");

  await page.getByRole("textbox", { name: "Month:" }).fill("March");
  await page.getByRole("textbox", { name: "Year:" }).fill("2026");

  await page.getByRole("button", { name: "Purchase" }).click();
  await page.getByRole("button", { name: "OK" }).click();
  await page.waitForTimeout(2000);
});
