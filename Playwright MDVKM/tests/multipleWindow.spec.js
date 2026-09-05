import { test, expect } from "@playwright/test";

// fixture
test("Multiple tab", async ({ page, context }) => {
  await page.goto(
    "https://www.hyrtutorials.com/p/window-handles-practice.html",
  );
  await page.locator("#newTabsBtn").click();

  await page.waitForTimeout(3000);
  const allTabs = await context.pages(); // return no of tabs /5 a,bcdef

  for (const p of allTabs) {
    // await p.waitForLoadState(); // waiting for loading a tab
    console.log(await p.title());
    if ((await p.title()) === "Basic Controls - H Y R Tutorials") {
      await p.locator("#englishchbx").check();
      await p.waitForTimeout(2000);
    }
  }
});
