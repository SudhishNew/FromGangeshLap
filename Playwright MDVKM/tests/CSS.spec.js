import {test} from "@playwright/test"

test('Csslocator', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //atributes and values
    await page.locator('[id="name"]').fill("mugesh")
    //class
    await page.locator('.form-control').nth(1).fill('mugesh@123')
    //id
    await page.locator('#phone').fill('987654321')

   const drag= await page.locator('//div[@id="draggable"]/p[text()="Drag me to my target"]')
   const drop=await page.locator(' [id="droppable"] p')
   await drag.scrollIntoViewIfNeeded()
   await drag.dragTo(drop)
    await page.waitForTimeout(2000)
})