import {test,chromium} from "@playwright/test"

test('Google launch', async()=>{
    const browser=await chromium.launch()
    const page=await browser.newPage()
    await page.goto('https://www.google.com/')
    await page.waitForTimeout(2000)
})

test("FB launch", async()=>{
    const browser=await chromium.launch()
    const page=await browser.newPage()
    await page.goto('https://www.facebook.com/')
    await page.waitForTimeout(2000)
})
test.skip("Insta launch", async()=>{
    const browser=await chromium.launch()
    const page=await browser.newPage()
    await page.goto('https://www.instagram.com/?hl=en')
    await page.waitForTimeout(2000)
})

test("youtube launch", async()=>{
    const browser=await chromium.launch()
    const page=await browser.newPage()
    await page.goto('https://www.youtube.com/')
    await page.waitForTimeout(2000)
})



