import{test} from'@playwright/test'

test('Shadow DOM', async({page})=>{
    await page.goto('https://selectorshub.com/xpath-practice-page/')
    await page.locator('[id="kils"]').fill('Roman')
    await page.getByPlaceholder('Enter pizza name').fill('Dominos')
    await page.waitForTimeout(4000)
})