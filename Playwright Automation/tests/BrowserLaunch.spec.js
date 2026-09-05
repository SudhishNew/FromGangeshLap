import{test, chromium} from "@playwright/test"

test("launch FB", async()=>{
   const browser= await chromium.launch()
   const window= await browser.newContext()
   const tab=await window.newPage()
   await tab.goto("https://www.facebook.com/login/")
   await tab.waitForTimeout(3000)
})

test("launch Insta", async({page})=>{
//    const browser= await chromium.launch()
//    const window= await browser.newContext()
//    const tab=await window.newPage()
   await page.goto("https://www.instagram.com/accounts/login/?hl=en")
   await page.waitForTimeout(3000)
})

test("launch TestBlog", async({page})=>{
//    const browser= await chromium.launch()
//    const window= await browser.newContext()
//    const tab=await window.newPage()
  const url="https://testautomationpractice.blogspot.com/";
   await page.goto(url)
   await page.waitForTimeout(3000)
})

