import {test} from "@playwright/test"

test('Frames', async({page})=>{
    await page.goto('https://letcode.in/frame')
    //handle by url
    // await page.goto('https://letcode.in/frameui')

    //by using frame()

    // await page.frame('firstFr').getByPlaceholder('Enter name').fill('Srinath')
    //frameLocator()
    // await page.frameLocator('#firstFr').getByPlaceholder('Enter name').fill('Srinath')
    // await page.frameLocator('#firstFr').locator('[name="lname"]').fill('Kumar')
//    await page.goto('https://letcode.in/innerframe')

await page.frameLocator('#firstFr').frameLocator('[title="Inner Frame"]').locator('[name="email"]').fill('Srinath@gmail.com')
//    await page.locator('[name="email"]').fill('sri@gmail.com')
    await page.waitForTimeout(3000)
})