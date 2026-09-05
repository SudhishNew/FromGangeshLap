import {test,chromium} from "@playwright/test"

test ("Vedio", async()=>{
const browser=await chromium.launch({headless:false})
const context=await browser.newContext({recordVideo:{
    dir:"tests/vedios"
}

})
const page=await context.newPage()
await page.goto('https://testautomationpractice.blogspot.com/')
await page.locator('//a[text()="Download Files"]').scrollIntoViewIfNeeded()
await page.waitForTimeout(2000)
})