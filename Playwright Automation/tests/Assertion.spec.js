import{test,expect} from "@playwright/test"

test('Assertion', async({page})=>{
    await page.goto('https://www.facebook.com/login/')
    const title=await page.locator('//title[text()="Facebook"]').textContent()
    await expect.soft(page).not.toHaveTitle('Facebook')
    console.log(title)

})