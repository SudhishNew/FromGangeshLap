import {test,chromium} from "@playwright/test"

test('FB Launch', async()=>{

    const browser=await chromium.launch()    // to launch the browser 
    const window=await browser.newContext()  // to open the window
    const page=await window.newPage()        // to open tab
    await page.goto('https://www.facebook.com/?_rdr')


})