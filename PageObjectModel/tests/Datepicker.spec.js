import { test } from "@playwright/test";

test("date", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const curmonth = "May";
  const curyear = "2026";

  await page.locator('[id="datepicker"]').click();
//   await page.pause();
  const month = await page.locator(".ui-datepicker-month").textContent();
  const year = await page.locator(".ui-datepicker-year").textContent();
  // console.log(month, year);

  while(true){

      const month=await page.locator('.ui-datepicker-month').textContent()
      const year=await page.locator('.ui-datepicker-year').textContent()

      if(curyear==year && curmonth==month){
          break;
      }

      await page.locator('//span[text()="Next"]').click()
      
      await page.waitForTimeout(2000)
  }
});
