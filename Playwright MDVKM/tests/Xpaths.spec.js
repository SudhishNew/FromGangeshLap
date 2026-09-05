import {test, chromium, firefox, webkit} from "@playwright/test"

test('Xpath',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("//input[@id='name']").fill('Ganesh')
    await page.locator('//input[@placeholder="Enter EMail"]').fill('Ganesh@123')
    await page.locator('(//input[@class="form-control"])[2]').fill('9876543210')
    await page.locator('//label[text()="Address:"]').fill('Chennai medavakam')
    await page.locator('//label[text()="Male"]').check()
    await page.locator('(//div[contains(@class,"form-check")])[3]').click()
    await page.locator('//input[@value="wednesday"]').check()
        const checkbox=await page.locator('//input[@value="wednesday"]').isChecked()
    console.log(checkbox)
    await page.waitForTimeout(3000)    
})

test.only("brws context", async()=>{
    const browser=await webkit.launch()
    const contxt=await browser.newContext()
    const page=await contxt.newPage()
    // await page.setViewportSize({width:1920,hieght:1080})
    await page.goto('https://www.amazon.in/')
    
    await page.waitForTimeout(2000)


})