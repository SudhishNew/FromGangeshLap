import {test} from "@playwright/test"

test('CSS', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //by id
    await page.locator('#name').pressSequentially('Prushothaman') 
    //by class
    await page.locator('.form-control').nth(1).fill('prushoth123@gmail.com')
    //attribute and attribute value
    await page.locator('[placeholder="Enter Phone"]').fill('98765432109')
    await page.waitForTimeout(2000)
})

test("CSS Selector", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#name').fill('Priyanka')
    await page.locator('.form-control ').nth(1).fill('priyanka@gmail.com')
    await page.locator('[maxlength="10"]').pressSequentially('9876543210',{delay:1000})
    await page.waitForTimeout(2000)
})