import {test} from "@playwright/test"
test("Auto Suggesion", async({page})=>{
    await page.goto('https://www.google.com/')
    await page.locator('[name="q"]').fill('ind')
    // await page.locator('div[role="presentation"] ul[role="listbox"] li').first().waitFor()
    await page.locator('div[role="presentation"] ul[role="listbox"] li').nth(4).click()
    await page.waitForTimeout(2000)
})

test.only("amazon autosugess", async({page})=>{
    await page.goto('https://www.amazon.com/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone')
    // await page.locator('//input[@id="twotabsearchtextbox"]').first().waitFor()
 const slectedsug=     await page.locator('(//div[@class="left-pane-results-container"]/div)[7]').innerText()
 console.log(slectedsug)   
 await page.locator('(//div[@class="left-pane-results-container"]/div)[7]').click()

    await page.waitForTimeout(3000)
})