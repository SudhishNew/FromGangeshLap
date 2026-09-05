import{test} from "@playwright/test"

test("Google launch", async({page})=>{
    await page.goto('https://www.google.com/')
    await page.locator('#APjFqb').fill('INDIA')
     const search=await page.locator('#APjFqb')
     await search.press('Enter')
    //  const atrbt=await search.getAttribute('aria-label')
     console.log(atrbt)
     console.log(page.url())
     await page.waitForTimeout(2000)
     await page.goBack()

    //  await page.reload()
    //  await page.goForward()

})