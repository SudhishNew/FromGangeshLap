
import{test} from "@playwright/test"

test('CSS', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //id
    await page.locator('#name').fill('Srinath')
    //class
    await page.locator('.form-control').nth(1).fill('sri@gmail.com')
    //atr and atrval
    await page.locator('[maxlength="10"]').fill('87654321909')
    //multi atr
    await page.locator('[class="form-control"][id="textarea"]').pressSequentially('anna nagar, chennai',{delay: 500})

    await page.waitForTimeout(2000)

})


test("inbuilt locators", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //getByPlaceholder
    await page.getByPlaceholder('Enter Name').pressSequentially('Janani',{delay:500})
    // await page.getByText('Address:')
    await page.getByLabel('Address:').fill('Sholinganallur, pudukottai')
    await page.getByText('PlaywrightPractice').click()


const atrbt=await page.getByAltText('logo image').getAttribute('alt')
console.log(atrbt)
    await page.waitForTimeout(2000)
})

test('Css and  Inbuild', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#name').fill('Janani Sri')
    await page.locator('.form-control').nth(1).fill('janani123@gmail.com')
    await page.locator('[placeholder="Enter Phone"]').fill('9876543210')
    
    await page.getByText('PlaywrightPractice').click()
    await page.getByText('Submit Form').click()
    await page.getByLabel('Email Address:').fill('jananisri@gmail.com')
    await page.getByPlaceholder('Enter your full name').fill('JananiSri')
    const altvalue=await page.getByAltText('logo image').getAttribute('src')
    console.log(altvalue)
    await page.getByTitle('Home page link').scrollIntoViewIfNeeded()
      await page.waitForTimeout(2000)
    await page.getByTitle('Home page link').click()
    const price=await page.getByTestId('product-price').nth(1).innerText()
    console.log(price)
    await page.getByRole('textbox', {name:'Username:'}).fill("janani")
    await page.getByRole('checkbox', {name:'Accept terms'}).check()
    await page.waitForTimeout(3000)


})



