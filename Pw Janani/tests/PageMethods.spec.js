import {test} from "@playwright/test"

test('Pge methods', async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')

    await page.locator('[id="username"]').fill('student')

   const input= await page.locator('[id="username"]').inputValue()

   //is editable or not
  const isedit=await page.locator('[id="username"]').isEditable()

  console.log(isedit)

   console.log(input)

    await page.locator('[name="password"]').fill('Password123')

     const isVis=await page.locator('[name="password"]').isDisabled()
     console.log(isVis)

    const subtext=  await page.locator('.btn').innerText()
    const atrbt=await page.locator('.btn').getAttribute('class')
    console.log(atrbt)
    const isenable=await page.locator('.btn').isEnabled()
    await page.locator('.btn').click()

     console.log(isenable)
   console.log(subtext)

    await page.waitForTimeout(2000)
    //to print the url of the current page
    const url=await page.url()
    console.log(url)
    //back to home page
    // await page.goBack()
    //move forward to the nextpage
    // await page.goForward()
    //reload
    await page.reload()


})

test.skip('press', async({page})=>{
    
    await page.goto('https://www.google.com/')
    await page.locator('//textarea[@class="gLFyf"]').fill('India')
    await page.locator('//textarea[@class="gLFyf"]').press('Enter')
     await page.waitForTimeout(2000)
})