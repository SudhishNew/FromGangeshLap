import{test} from "@playwright/test"
test('CSS', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //using ID selector
    // await page.locator('[for="textbox"]').first().fill('Kailash')
    // await page.waitForTimeout(2000)
     await page.locator('#name').pressSequentially('Kiresh')
    
    await page.locator('#email').type('kailash@gmail.com')
    await page.locator('.form-control').nth(2).pressSequentially('9876543210',{ delay:500})
    await page.locator('[for="textarea"]').fill('medavakam chennai')

    //radio button using atrbt and artbt value

    await page.locator('[value="male"]').check()
    //check box
    await page.locator('#sunday').check()
   const ischeck= await page.locator('#sunday').isChecked()
   console.log(ischeck)

    await page.locator('.form-check-label').nth(3).click()
    await page.locator('[value="tuesday"]').check()
    await page.waitForTimeout(1000)
    await page.locator('#sunday').check()

    await page.waitForTimeout(2000)

})