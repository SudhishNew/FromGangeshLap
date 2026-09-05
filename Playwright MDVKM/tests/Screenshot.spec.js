import {test} from "@playwright/test"
test('Screenshot', async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    //visible page
     await page.screenshot({path:'ScreenShots/TestLoginPage.png'})
    //full page
    await page.screenshot({path:'ScreenShots/TestLoginFullPage.jpeg',fullPage:true})
    //locator
    await page.locator('//button[@id="submit"]').screenshot({path:'ScreenShots/submitbtn.png'})
})

test("DragAndDrop", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('[id="draggable"] p').scrollIntoViewIfNeeded()
    const dragdrop=await page.dragAndDrop('[id="draggable"] p','[id="droppable"] p')
    
    await page.waitForTimeout(2000)
})