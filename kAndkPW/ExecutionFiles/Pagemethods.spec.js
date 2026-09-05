import {test} from "@playwright/test"

test('page methods', async ({page})=>{
    await page.goto('https://www.facebook.com/login/')
    // await page.locator('[name="email"]').fill('kailash@gmail.com')
    await page.fill('[name="email"]','kailash@gmail.com')
   const input= await page.locator('[name="email"]').inputValue()
  const isedit= await page.locator('[name="email"]').isDisabled()
  console.log(isedit)
 const IsNotEdit= await page.locator('[role="img"]').isEnabled()
 console.log(IsNotEdit)
   
   console.log(input)
   const atrbt=await page.locator('[name="email"]').getAttribute('aria-invalid')
   console.log(atrbt)


      await page.waitForTimeout(2000)
    const text= await page.locator('(//div[contains(@class,"x1ja2u2z ")][@role="none"]/span)[3]').textContent() //to extract the text from the web element

    await page.locator('(//div[contains(@class,"x1ja2u2z ")][@role="none"]/span)[3]').click()
    console.log(text)
    await page.waitForTimeout(2000)
    console.log(await page.url())   //to print the current page url
    await page.goBack()   
    await page.waitForTimeout(2000)    
    await page.reload()      // get back to home page

    await page.waitForTimeout(2000)

})