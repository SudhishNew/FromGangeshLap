import { test, expect } from "@playwright/test";

test("Static table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const row = await page.locator("//table[@name='BookTable']/tbody/tr");
  const column = await page.locator("//table[@name='BookTable']/tbody/tr/th");

  console.log("Row ", await row.count());
  console.log("column ", await column.count());

  // var value = "";
  for (let i = 0; i < (await row.count()); i++) {
    for (let j = i; j < (await column.count()); j++) {
      const value = await row.nth(j).textContent();
      // if(value === 'Selenium'){
      //     break;
      // }
      await expect.soft(value).toBe("Selenium");
    }
  }
});

//assertion failed 3 rerun

test.only("Pagination table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const pages = await page.locator(".pagination li a"); //get pages no
  const pageNO = await pages.count(); // 1 2 3 4\

  const arr = [1,3,7,9,13,15,18, 16];

  for (let p = 0; p < pageNO; p++) {
    if (p > 0) {
      await pages.nth(p).click(); // click the next pages
    }

    const rows = await page.locator("#productTable tbody tr"); // locating table rows

    for (let i = 0; i < (await rows.count()); i++) {
      const row = await rows.nth(i);
      const tds = await row.locator("td"); // fetch all tds in a particuar row

      for (let j = 0; j < (await tds.count()); j++) {
        const cell = await tds.nth(j).textContent(); // fetch data from tds
        const checkBox = await tds.locator('//input[@type="checkbox"]');
        if(arr.includes(Number(cell))){
            await checkBox.click();
            console.log("Cell checked ", cell);
        }
        
      }
    }
  }

  await page.waitForTimeout(5000);
});
