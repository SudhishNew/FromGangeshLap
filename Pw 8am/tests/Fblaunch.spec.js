import {test,chromium } from "@playwright/test"

test("FB launch", async()=>{
   const browser= await chromium.launch()
    const page=await browser.newPage()
    await page.goto('https://www.facebook.com/login/')
    await page.waitForTimeout(2000)

})

test("Insta launch", async()=>{
    const browser= await chromium.launch({
        headless: false
    })
    const page=await browser.newPage()
    await page.goto('https://www.instagram.com/?hl=en')
    // await page.waitForTimeout(2000)

})

test("twitter launch", async()=>{
    const browser=await chromium.launch()
    const page=await browser.newPage()
    await page.goto('https://x.com/')
    // await page.waitForTimeout(2000)
})

test("youtube launch", async({page})=>{
    // const browser=await chromium.launch()
    // const page=await browser.newPage()
    await page.goto('https://www.youtube.com/')
    // await page.waitForTimeout(2000)

})


