import { test } from "@playwright/test";
test("single tab", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const [newPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("//button[text()='New Tab']"),
  ]);
  await newPage.waitForLoadState();
  await page.bringToFront()//return main page
  console.log(newPage.url);
});

test("multiple windows", async ({ page, context }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.click("#PopUp");
  await page.waitForTimeout(2000);

  const pages = context.pages();
  console.log(pages.length);

  for (const p of pages) {
    await p.waitForLoadState();
    if ((await p.title()) == "Selenium") {
      console.log(p.url());
      console.log(await p.title());

      await p.getByLabel("Toggle navigation").click();
      await page.waitForTimeout(2000);
    }
  }
});
