import {test, expect} from "@playwright/test"
test('Assert', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect( page.locator('#name')).toBeVisible()
    await expect.soft(page.locator('[class="start"]')).not.toBeEnabled()
    await page.waitForTimeout(2000)
    await page.locator('#sunday').check()
     await page.waitForTimeout(2000)
    await expect(page.locator('#sunday')).toBeChecked()
})