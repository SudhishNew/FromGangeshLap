import{test,expect} from "@playwright/test"

test('Frames', async({page})=>{
    await page.goto('https://letcode.in/frame')
    await page.frameLocator('[id="firstFr"]').locator('[name="fname"]').fill('george')
    await page.frameLocator('[id="firstFr"]').locator('//input[@placeholder="Enter email"][@type="text"][@name="lname"]').fill('Victor')
    // await page.frameLocator('[id="firstFr"]').scrollIntoViewIfNeeded()
    await page.frameLocator('[id="firstFr"]').frameLocator('[src="/innerframe"]').locator('[name="email"]').fill('george14@gmail.com')
    await page.waitForTimeout(3000)
})

test.only('No of frames',async({page})=>{
    await page.goto('https://letcode.in/frame')
    const frames= await page.frames()
    console.log(frames.length)


    frames.forEach((f,i)=>{
       console.log(`${i} & ${f.url()}`)

    })

    await frames[1].locator('[name="fname"]').fill('7pm batch')
    await frames[1].locator('//input[@placeholder="Enter email"][@type="text"][@name="lname"]').fill('Victor')
    await frames[3].locator('[name="email"]').fill('sudhish@gmail.com')
    await page.waitForTimeout(3000)
    
})