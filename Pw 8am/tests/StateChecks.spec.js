import {test} from "@playwright/test"

test("isMethods", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
  const isvis=  await page.locator('#name').isHidden()
  console.log(isvis)
})

