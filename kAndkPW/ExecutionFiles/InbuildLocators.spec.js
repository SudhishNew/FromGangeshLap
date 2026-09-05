import{test} from "@playwright/test"

test('inbuild', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('[href="https://testautomationpractice.blogspot.com/p/playwrightpractice.html"]').click()
    //getByText()
    await page.getByText('Submit Form').click()
    //getByLabel using label-tag
    await page.getByLabel('Email Address:').fill('Kailash@gmail.com')
    //getByLabel using label-atribute
    await page.getByLabel('Your Age:').fill('28')
    //getByPlaceHolder()
    await page.getByPlaceholder('Enter your full name').fill('kailash M')
    //getByAlttext()
    const atrbt=await page.getByAltText('logo image').getAttribute('src')
    console.log(atrbt)
    //getByTitle()  title- as atrbt , not as tag
    await page.getByTitle('Home page link').click()
    //getByTestId()
   const text= await page.getByTestId('product-card-1').textContent()
   console.log(text)
   //getByRole()
   await page.getByRole('textbox',{name:'Username:'}).fill('Kailash')
   await page.getByRole('checkbox',{name:'Accept terms'}).check()
    await page.waitForTimeout(3000)
})