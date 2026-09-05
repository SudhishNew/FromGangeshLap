import {test} from "@playwright/test";

test("FB login", async({page})=>{
    await page.goto('https://www.facebook.com/login/');
    await page.locator('//input[@name="email"]').fill('Sudhish1408@gmail.com')
    await page.locator('//input[@name="pass"]').fill("Sudhish1408")
    await page.locator('//span[text()="Log in"]').click()
    await page.waitForTimeout(3000)
})