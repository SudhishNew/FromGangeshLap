import {test} from "@playwright/test"

test("file", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#singleFileInput').scrollIntoViewIfNeeded()
    await page.locator('#singleFileInput').setInputFiles("C:/Users/user/OneDrive/Desktop/Status.xlsx")   //"C:\Users\user\OneDrive\Desktop\Status.xlsx"
    await page.waitForTimeout(2000)
})