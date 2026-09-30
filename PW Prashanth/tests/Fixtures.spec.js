import {test} from "@playwright/test"

test('Fixtures', async ({page})=>{
   
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#name').fill('Prashanth')
    await page.locator('#email').fill('prashanth123@gmail.com')
    await page.locator('.start').nth(0).click()
    await page.waitForTimeout(2000)



})

