import{test} from '@playwright/test'

test('scrnsht',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.screenshot({path:'Screenshots/ testblog.png'})
    // await page.screenshot({path:'Screenshots/testblog1.png',fullPage:true})
     await page.locator('//button[text()="START"]').screenshot({path:'Screenshots/StartButton.jpeg'})
})