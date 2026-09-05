import {test} from "@playwright/test"
test('FBCreate', async({page})=>{
    await page.goto('https://www.facebook.com/login/')
    await page.locator('//span[text()="Create new account"]').click()
    // await page.locator('div[aria-activedescendant="_r_5_"]').click()
    await page.getByLabel("Select day").click()
    await page.getByRole("option",{name:"6",exact:true}).click()
    await page.getByLabel('Select month').click()
    await page.getByRole("option", {name:'January'}).click()
    // await page.waitForTimeout(500)
    // await page.locator("//div[@id='_r_4_']/child::div[text()='5']").click()
    
    await page.waitForTimeout(4000)
})