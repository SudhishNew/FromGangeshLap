import {test} from "@playwright/test"

test("Frame", async ({page})=>{
    // await page.goto('https://letcode.in/frame/')

    //by using frameLocator()
    // const frame1=await page.frameLocator('#firstFr')
    // await frame1.locator('[name="fname"]').fill('Muniyappan')

    // //by suing frame name
    // const frameOne=await page.frame('firstFr')
    //   await frameOne.locator('[name="fname"]').fill('Muniyappan')

    //by using frame url
    //  await page.goto('https://letcode.in/frameui')
    //  await page.getByPlaceholder('Enter name').fill('Muniyappan')
    await page.waitForTimeout(2000)
})

test("inner frame", async({page})=>{
    await page.goto('https://letcode.in/frame/')

    //by using frameLocator()
    await page.frameLocator('#firstFr').frameLocator('[title="Inner Frame"]').locator('[name="email"]').fill('muni123@gmail.com')
    await page.waitForTimeout(2000)
})

test.only("fisrtla irundhu frames", async({page})=>{
    // await page.goto('https://letcode.in/frame/')

    //using frameLocator()
    // await page.frameLocator('#firstFr').locator('[name="fname"]').fill('prakash')
    // await page.waitForTimeout(2000)

    //using frame name
    // await page.frame('firstFr').locator('[name="fname"]').fill('prakash')
    // await page.waitForTimeout(2000)

    //using url
    await page.goto('https://letcode.in/frameui')
    await page.locator('[name="fname"]').fill('prakash')
     await page.waitForTimeout(2000)

    
})