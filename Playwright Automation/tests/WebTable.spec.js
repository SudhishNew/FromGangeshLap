import {test, expect} from "@playwright/test"

test('Table', async({page})=>{
    await page.goto('https://www.qaplayground.com/practice/data-table')
    await page.getByTestId('books-table')
    await expect(page.getByTestId('books-table')).toBeVisible()
    // headers
   const headers= await page.locator('table[id="books-table"]  thead tr th').allTextContents()
   console.log(headers)
   await expect(headers).toContain('Book Author')

   //get a single cell data
  const row3data=await page.locator('table[id="books-table"]  tbody tr:nth-child(3) td:nth-child(4)').textContent()
console.log(row3data)

//rows count
const totalRow=await page.locator('table[id="books-table"] tbody tr').count()
console.log(totalRow)
await expect(totalRow).toBe(10)
 const trText=await page.locator('table[id="books-table"] tbody tr:nth-child(5) td').allTextContents()
console.log(trText)

//4th column data
const BookAuthor=await page.locator('table[id="books-table"] tbody td:nth-child(4)').allTextContents()

console.log(BookAuthor)


   await page.waitForTimeout(3000)
})

test("Dyanamic wb table", async({page})=>{
   await page.goto('https://testautomationpractice.blogspot.com/')
   const SystemData=await page.locator('[id="taskTable"]  tbody tr').filter({hasText:'Chrome'})
   await SystemData.allTextContents()
   console.log(await SystemData.allTextContents())
})


test.only("pagination with multi page", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const products = [
    "Smartwatch",
    "Tablet",
    "Wireless Earbuds",
    "Portable Charger",
    "Soundbar",
  ];
  const row1 = await page.locator("table#productTable tbody tr");
  const pageNo = await page.locator("#pagination li a");

  for (const item of products) {
    let found = false;
    for (let i = 0; i < (await pageNo.count()); i++) {
      await pageNo.nth(i).click();
      await page.waitForSelector("table#productTable tbody tr");
      const rowTargetted = await row1.locator(":scope", { hasText: item });
      if ((await rowTargetted.count()) > 0) {
        await rowTargetted.locator('td input[type="checkbox"]').check();
        found = true;
        break;
      }
    }
    if (!found) {
      console.log("not found");
    }
  }
});
