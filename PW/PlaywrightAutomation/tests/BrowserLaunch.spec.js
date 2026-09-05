import { chromium,test } from "@playwright/test";

test("BrowserLaunch", async()=>{

  const brws=  await chromium.launch({
    headless:false
  })
  const tab=await brws.newPage()
  const page=await tab.goto("https://www.facebook.com/")
  await tab.locator("#_R_1h6kqsqppb6amH1_").fill("Fb@gmail.com")
  await tab.locator("#_R_1hmkqsqppb6amH1_").fill("Fb@12345")
  await tab.locator('//span[text()="Log in"]').click()
  await tab.waitForTimeout(3000)
  
})