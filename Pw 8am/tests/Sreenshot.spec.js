import{test} from  "@playwright/test"
test("Screenshot",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //visible page
    // await page.screenshot({path:'tests\\SreenShots\\testpage.png'})

    //fullpage
    // await page.screenshot({path:'tests\\SreenShots\\fulltestpage.jpeg',fullPage:true})

    //locator
    await page.locator('[name="start"]').screenshot({path:'tests\\SreenShots\\startbtn.png'})
})