import{test,chromium,firefox} from '@playwright/test'
test('Fb Launch', async()=>{
    const browser=await chromium.launch()   //to launch the browser
    const page=await browser.newPage()    //to creat a new tab
    await page.goto('https://www.facebook.com/')  //to navigate into the specific web page
    await page.waitForTimeout(2000)
})

test('Insta Launch', async()=>{
    const browser=await chromium.launch()
    const page=await browser.newPage()
    await page.goto('https://www.instagram.com/?hl=en')
    await page.waitForTimeout(2000)

})

test('gmail launch', async()=>{
 const browser= await firefox.launch()
 const page=await browser.newPage()
 await page.goto('https://mail.google.com/mail/u/0/#inbox')
 await page.waitForTimeout(2000)

})

test('youtube launch', async()=>{
 const browser= await firefox.launch()
 const page=await browser.newPage()
 await page.got('https://www.youtube.com/')
 await page.waitForTimeout(2000)

})

