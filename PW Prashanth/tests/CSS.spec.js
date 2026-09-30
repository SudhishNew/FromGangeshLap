import {test} from "@playwright/test"

test('CSS', async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.locator('[for="username"]').fill('student')
    await page.locator('[name="password"]').fill('Password123')
    await page.locator('.btn').click()
    await page.goBack()
    await page.reload()
    await page.waitForTimeout(2000)

})

test.only('Inbuild', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')
await page.locator('[href="https://testautomationpractice.blogspot.com/p/playwrightpractice.html"]').click()
//getByText()
await page.getByText('Submit Form').click()
//getByLable()
await page.getByLabel('Email Address:').fill('prashanth@gmail.com')
//getByPlaceHolder()
await page.getByPlaceholder('Enter your full name').pressSequentially('Prashanth I',{delay:500})
//getByAltText()
const text=await page.getByAltText('logo image').getAttribute('alt')
console.log(text);
//getByTestId()
const alltext=await page.getByTestId('product-card-1').allTextContents()
console.log(alltext)
//getByTitle()
await page.getByTitle('Home page link').click()
//getByRole()
await page.getByRole('textbox',{name:'Username:'}).fill('Prashanth')
await page.getByRole('checkbox',{name:'Accept terms'}).click()
await page.waitForTimeout(2000)
await page.getByRole('checkbox',{name:'Accept terms'}).check()
await page.waitForTimeout(2000)
})