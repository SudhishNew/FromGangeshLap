import{test} from "@playwright/test"

test("DBL click",async({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com/')
 await page.locator('//button[text()="Copy Text"]').scrollIntoViewIfNeeded()
 await page.locator('//button[text()="Copy Text"]').dblclick()
 await page.waitForTimeout(2000)
})