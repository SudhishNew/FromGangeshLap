import{test} from "@playwright/test"

test('Absolute', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
const titleH1=  await page.locator("/html/body/div[4]/div[2]/div[2]/div[2]/header/div/div[2]/div[2]/div/div/div/div[1]/h1").textContent()
console.log(titleH1)
})

test('Relative', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //relative xpath
const titleH1=  await page.locator('//h1[@class="title"]').textContent()
await page.locator('//input[@id="name"]').fill('Srinath')
console.log(titleH1)
await page.locator('//input[@placeholder="Enter EMail"]').fill('srinath@gmail.com')
//xpath by text()
await page.locator('//button[text()="START"]').click()
//xpath and
await page.locator('//input[@class="form-control" and @maxlength="10"]').fill('87654321901')
//xpath using position
await page.locator('(//label[@class="form-check-label"])[3]').check()
const dd=await page.locator('//select[@id="country"]')
await dd.click()
await page.waitForSelector('//select[@id="country"]/option)[3]')

// await dd.locator('(//select[@id="country"]/option)[3]').click()
await page.waitForTimeout(2000)
})

test('Dynamic xpath', async({page})=>{
    await page.goto('https://www.google.com/')
    //contains
    // await page.locator('//textarea[contains(@data-ved,"0ahUKEw")]').fill('India')
    //starts-with
    await page.locator('//textarea[starts-with(@data-ved,"0ahUKE")]').fill('Mumbai Indians ka Raja')
    await page.locator('//textarea[starts-with(@data-ved,"0ahUKE")]').press('Enter')
})

test.only('Xpath Axes', async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.locator('[role="searchbox"]').fill('iphone')
    await page.locator('[role="searchbox"]').press('Enter')
    await page.locator('//div[@class="a-row"]/following::a/child::h2/child::span[contains(text(),"iPhone 17 Pro 512 GB: 15.93 cm (6.3″) ")]').click()
    await page.waitForTimeout(2000)
})

test("Validate Dynamic table with pagingnation", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const pages = page.locator("#pagination li");
  const pageNo = await pages.count();
  const ids = [18, 7, "$30.99", 8, 21, 20, "Wireless Earbuds"];
  for (let i = 0; i < pageNo; i++) {
    if (i > 0) {
      await pages.nth(i).click();
    }
    const rows = page.locator("#productTable tbody tr");
    const rowNo=await rows.count()
    console.log(rowNo);
    for (let j = 0; j < rowNo; j++) {
      const row = rows.nth(j).locator("td");
      for (let k = 0; k < (await row.count()); k++) {
        const cell = await row.nth(k).textContent();
        console.log(cell);
        
        const check = row.locator("//input[@type='checkbox']");
        if (ids.includes(Number(cell)) || ids.includes(cell)) {
          await check.click();
          console.log("Clicked : ", cell);
        }
        // console.log("Cell value : ", cell);
      }
    }
await page.waitForTimeout(2000);
  }

  
});


