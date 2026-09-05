import { test, expect} from "@playwright/test"

test('CustomDD', async({page})=>{
    await page.goto('https://www.google.com/')
    await page.locator('[role="combobox"]').fill('ind')
    // await page.locator('[role="listbox"] li').nth(3).waitFor()

   const alltext= await page.locator('[role="listbox"] li').allInnerTexts()
    await page.locator('[role="listbox"] li').first().waitFor()

//   const sugcount= await page.locator('[role="listbox"] li').count()
    const sug=await page.locator('[role="listbox"] li').nth(3).click()
    // console.log(sug)


//    for(let i of alltext){
//     if(i==alltext[4]){
//         const thirdtext=  await page.locator('[role="listbox"] li').nth(3).innerText()
//         await page.waitForTimeout(4000)
//         await page.locator('[role="listbox"] li').nth(3).click()
//         console.log(thirdtext)
      

//     }
//    }
   
    await page.waitForTimeout(4000)
})