import{test,expect} from "@playwright/test"

test("Xpath", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//button[@name="start"]').click()
    const radio=await page.locator('//label[text()="Male"]').check()
    await expect(await page.locator('//label[text()="Male"]')).toBeChecked()
    await page.locator('//label[contains(@for,"sunday")]').check()
    await page.locator('//label[contains(@for,"mon")]').check()
    await page.locator('(//label[contains(@for,"day")])[5]').check()
    await page.getByText('Friday').check()
    await page.getByPlaceholder('Enter Phone').fill('9876543221')
    await page.getByLabel('Address:').fill("chennai anna nagar")
    await page.getByTitle('Automation Testing Practice - Atom')
    await page.getByRole("textbox",{name:"Enter EMail"}).fill("george@gmail.com")
    await page.waitForTimeout(3000)


    

})