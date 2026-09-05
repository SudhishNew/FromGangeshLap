import{test} from "@playwright/test"

test("Xpath", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('//input[@id="name"]').fill('Sudhish')
    await page.locator('//input[@placeholder="Enter EMail"]').fill('Sudhish123@gmail.com')
    await page.locator('//button[text()="START"]').click()
    await page.locator('//input[@value="male"]').check()
    await page.locator('(//input[@class="form-check-input"])[4]').check()
    await page.waitForTimeout(2000)
})

test.only ("axes xpaths", async({page})=>{
    await page.goto('https://practice.expandtesting.com/login')
    await page.locator('//form/descendant::div[@class="mb-3"]/child::label[text()="Username"]').type('Muniyappan')
    await page.locator('//form/descendant::div[@class="mb-3"]/child::label[text()="Username"]').fill('Muniyappan')
    await page.waitForTimeout(2000)
})