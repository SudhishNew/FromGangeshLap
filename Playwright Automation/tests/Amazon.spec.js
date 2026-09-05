import{test} from "@playwright/test"

test("Suggession", async({page})=>{
    await page.goto("https://www.amazon.in/")

    await page.locator("#twotabsearchtextbox[placeholder='Search Amazon.in']").fill('ind')

//    await page.waitForTimeout(3000)
// await page.locator('.two-pane-results-container[role="rowgroup"] div[id*="sac-suggestion-row"][role="row"]').first().waitFor()
//     const allContent= await page.locator(".two-pane-results-container[role='rowgroup'] div[id*='sac-suggestion-row'][role='row']").allTextContents()
//     // await page.locator('.two-pane-results-container[role="rowgroup"] div[id*="sac-suggestion-row"][role="row"]').first().waitFor()
//     console.log(allContent)
   
})

test.only('Google sugession', async({page})=>{
    await page.goto('https://www.google.com/')
    await page.locator('[role="combobox"]').fill('ind')
   const allsug= await page.locator('ul[role="listbox"] li').first().waitFor()
    const all=await page.locator('ul[role="listbox"] li').allInnerTexts()


    
    
    // const all =await allsug.allTextContents()
    
    console.log(all)

})