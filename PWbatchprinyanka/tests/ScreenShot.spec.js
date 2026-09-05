import {test} from "@playwright/test"

test("ScreenShot", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //visible page
    // await page.screenshot({path:"tests/ScreenShots/img1.png"})
    //full page
    //   await page.screenshot({path:"tests/ScreenShots/img1.png",fullPage:true})
    //for locator
    await page.locator('//button[@name="start"]').screenshot({path:"tests/ScreenShots/img1.png"})
})