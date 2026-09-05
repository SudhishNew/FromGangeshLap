// import{test,chromium} from "@playwright/test";

import{test} from "@playwright/test"

// test.describe("Grouping", async ()=>{
    test("Flipkart launch", async({page})=>{
    await page.goto('https://www.flipkart.com/')
   

} )
test("Myntra launch", async({page})=>{
    // test.fail()
    await page.goto('https://www.myntra.com')

} )
test("Google launch",async({page})=>{
    // const browser=await chromium.launch()
    // const page= await browser.newPage()
    await page.goto("https://www.google.com/")
    await page.waitForTimeout(3000)
}) 

test("FB launch",async({page})=>{
    // const browser=await chromium.launch()
    // const page= await browser.newPage()
    await page.goto("https://www.facebook.com/")
    await page.waitForTimeout(3000)
})




// })