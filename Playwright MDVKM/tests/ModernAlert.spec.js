import {test} from "@playwright/test"

test('Modern Alert', async({page})=>{
    await page.goto('https://letcode.in/alert')
    await page.locator('#modern').click()
    await page.getByLabel('close').click()
    await page.waitForTimeout(2000)
})