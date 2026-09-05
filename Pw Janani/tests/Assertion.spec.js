import {test,expect} from "@playwright/test"

test('Assert', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('//button[text()="Copy Text"]').scrollIntoViewIfNeeded()
    await expect.soft(page.locator('//button[text()="Copy Text"]')).toBeDisabled()
    await page.locator('//button[text()="Copy Text"]').dblclick()
    const inputval=await page.locator('#field2').inputValue()
    console.log(inputval)
    await expect(page.locator('#field2')).toHaveValue('Hello World!')
})