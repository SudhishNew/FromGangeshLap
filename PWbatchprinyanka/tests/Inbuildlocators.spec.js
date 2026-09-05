import { test } from "@playwright/test";
test("Inbuild", async ({ page }) => {
  await page.goto("https://jatin99.github.io/Playwright-demo-app/");
  //getBytext()
  const text = await page.getByText("Total Employees").textContent();
  console.log(text);
  //getByPlaceholder()
  await page.getByPlaceholder("Enter username").fill("Vignesh Sundhar");
  //getByTestId()
  await page.getByTestId("password-input").fill("Vignesh123");
  //getByTitle()
  await page.getByTitle("Click to toggle status").nth(1).click();

  await page.waitForTimeout(5000);
});

test("Inbuild getByAltText", async ({ page }) => {
  await page.goto("https://www.google.com/");
  //getByAltText()

  const img = await page.getByAltText("World Cup 2026: A celebration").first();

  const attributes = await img.getAttribute("data-csiid");

  

  console.log(attributes);
});
test("Inbuild getBYLabel", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //getByLabel()
  await page.getByLabel("Monday").check();
  // await page.waitForTimeout(2000)
  await page.getByLabel("Monday").click();

  await page.getByRole("textbox", { name: "Enter Name" }).fill("Hello");

   await page.getByRole("checkbox", { name: "Thursday" }).check()

  await page.waitForTimeout(5000);
});
