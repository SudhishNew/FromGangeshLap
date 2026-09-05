import {test} from "@playwright/test"

test.only("xpath", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //bsic xpath
    await page.locator('//input[@placeholder="Enter Name"]').pressSequentially('Gangesh', {delay:1000})
    await page.locator('//input[@id="email"][@maxlength="25"]').fill('gangesh123@gmail.com')
    //xpath using text
    await page.locator('//label[text()="Address:"]').fill('7654321980')
    await page.locator('//input[@class="form-check-input"]').check()
    await page.waitForTimeout(2000)

})


test('google', async({page})=>{
    await page.goto('https://google.com/')
    //starts-with()
    await page.locator('//textarea[starts-with(@data-ved,"0ahUKE")]').fill('india')
    //contaik l:o8jns()
    await page.locator('//textarea[contains(@data-ved,"0ahUKE")]').press('Enter')
    await page.waitForTimeout(2000)
    await page.goBack() 
    const text=await page.locator('//span[contains(text(),", your AI browsing assistant ")]').textContent()
   console.log(text)
    await page.waitForTimeout(2000)
})