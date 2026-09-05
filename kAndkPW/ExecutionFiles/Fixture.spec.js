import {test} from "@playwright/test"


test('Google launch', async({browser})=>{
   const page= await browser.newPage()
    await page.goto('https://www.google.com/?zx=1787553159256')
    await page.waitForTimeout(2000)
   
})