import {test} from '@playwright/test'

test('No of frames',async({page})=>{
    await page.goto('https://letcode.in/frame')
    const frames= await page.frames()
    console.log(frames.length)

    frames.forEach((frame,index)=>{
       console.log(`${index} & ${frame.url()}`)
     
    })

    
    await frames[1].locator('[name="fname"]').fill('7pm batch')

    await frames[1].locator('//input[@placeholder="Enter email"][@type="text"][@name="lname"]').fill('Victor')
    await frames[3].locator('[name="email"]').fill('sudhish@gmail.com')
    await page.screenshot({path:"snaps/visbilepage.png"})
    await page.screenshot({path:"snaps/fullpage.png",fullPage:true})
    
     await frames[3].locator('[name="email"]').screenshot({path:"Element.jpeg"})
     await page.waitForTimeout(3000)
})