import{test} from '@playwright/test'

test('Screens', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // await page.screenshot({path:'Screenshots/testpage2.png',fullPage:true})
    await page.locator('//button[text()="START"]').screenshot({path:'Screenshots/button.jpeg'})
})