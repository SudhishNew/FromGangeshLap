import {test} from "@playwright/test"

test('sugession', async({page})=>{

    await page.goto('https://www.amazon.in/')
    await page.locator('[id="twotabsearchtextbox"]').fill('iphone 17')

    await page.locator('//div[@role="row"]/descendant::span').first().waitFor()
  const allSug=  await page.locator('//div[@role="row"]').allInnerTexts()
  for(let i of allSug){
    console.log(i)
  }

})