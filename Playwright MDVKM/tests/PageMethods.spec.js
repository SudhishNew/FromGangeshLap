import{test} from "@playwright/test"

test("PageMethods",async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.locator('#username').nth(0).fill('student')
   const passwod= await page.locator('//label[text()="Password"]').fill('Password123')
    const password=await page.locator('//label[text()="Password"]')
    console.log(passwod)
    const submitbtn=await page.locator('//button[@id="submit"]').isVisible()
    console.log(submitbtn)
    await page.locator('//button[@id="submit"]').press('Enter')

    // await page.waitForTimeout(2000)
    // await page.goBack()
   console.log( await page.url())
    // await page.reload()
    await page.waitForTimeout(2000)
})

// test('Amazon')