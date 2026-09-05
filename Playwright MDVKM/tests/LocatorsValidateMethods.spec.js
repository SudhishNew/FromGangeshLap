import {test} from "@playwright/test"
test('ValidateLocators', async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    const isUserEnable=await page.locator('[name="username"]').isDisabled()
    console.log(isUserEnable)
    await page.locator('[name="username"]').fill('student')
    const isbtn=await page.locator('//button[text()="Submit"]').isHidden()
    console.log(isbtn)
    await page.waitForTimeout(2000)
})