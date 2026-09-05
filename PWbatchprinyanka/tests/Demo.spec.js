import {test} from "@playwright/test"

test("Demo", async({page})=>{
//     const browser=await chromium.launch()
//    const page= await browser.newPage()
   await page.goto('https://testautomationpractice.blogspot.com/')
   await page.locator('[id="name"]').fill('Priyanka')
   await page.waitForTimeout(2000)
   await page.locator('[id="name"]').pressSequentially('priya')
   await page.waitForTimeout(2000)

})