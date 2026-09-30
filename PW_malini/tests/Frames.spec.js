import {test} from "@playwright/test"

test('Frames', async({page})=>{
    await page.goto('https://letcode.in/frame/')
    //by using url
    // await page.goto('https://letcode.in/frameui')
    // await page.getByPlaceholder('Enter name').fill('Malini')

    //by suing frame name
    // await page.frame('firstFr').getByPlaceholder('Enter name').fill('Malini')
 
    // await page.frame('firstFr').locator('[name="lname"]').fill('Malini ')

    //by using frameLocator
    await page.frameLocator('#firstFr').getByPlaceholder('Enter name').fill('Malini')
     await page.frameLocator('#firstFr').locator('[name="lname"]').fill('Malini ')
    await page.waitForTimeout(2000)

    //inner frame
    //by using url

    // await page.goto('https://letcode.in/innerframe')

    //using frameLocator
    await page.frameLocator('#firstFr').frameLocator('[title="Inner Frame"]').locator('[name="email"]').fill('malini@gmail.com')
    
     await page.waitForTimeout(2000)
})