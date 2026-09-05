import {test} from "@playwright/test"
test('windows', async({context,page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

     const [NewPage]=await Promise.all([context.waitForEvent("page"),
     page.locator('//button[text()="New Tab"]').click()])
     await page.waitForTimeout(3000)
      await NewPage.locator('[name="q"]').scrollIntoViewIfNeeded()
     await NewPage.locator('[name="q"]').fill('Roma Reigns')
      
     await NewPage.waitForTimeout(3000)
     

})