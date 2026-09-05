import{test, expect} from "@playwright/test"
test("login",async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.locator('[id="username"]').fill('student')
    await page.locator('[name="password"]').fill('Password123')
    await page.locator('[class="btn"]').click()
    const title=await page.locator('//title[text()="Logged In Successfully | Practice Test Automation"]').textContent()
    await expect.soft(page).toHaveTitle('Logged In Successfully ')
    await page.waitForTimeout(2000)
    console.log(title)
})