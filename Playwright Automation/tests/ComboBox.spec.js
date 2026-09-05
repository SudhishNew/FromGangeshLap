import {test,expect} from "@playwright/test"

test('Custom', async({page})=>{
    await page.goto('https://www.google.com/')
    await page.locator('[aria-label="Search"]').fill('ind')
    await page.locator('[role="listbox"] li').first().waitFor()
  const sugText=  await page.locator('[role="listbox"] li').allInnerTexts()
  const textCount= await page.locator('[role="listbox"] li').count()
//   console.log(sugText)
console.log(textCount)
// for( let i of sugText){
    // console.log(i)
    // if(i==sugText[4]){
        await page.locator('[role="listbox"] li').nth(3).click()
    // }
// }

await page.waitForTimeout(3000)
// await page.screenshot({path:'Screenshots/visiblescreen.png'})
// await page.screenshot({path:'Screenshots/visiblescreen.png', fullPage:true})
   



})