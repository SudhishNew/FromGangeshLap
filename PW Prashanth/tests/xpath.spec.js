import {test} from "@playwright/test"

test('Xpath', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const Pagetitle=await page.locator('//h1[@class="title"]').textContent()
    console.log(Pagetitle);

    //xpath position[]
    await page.locator('(//label[@class="form-check-label"])[6]').check()
    await page.locator('//label[@class="form-check-label" and @for="saturday"]').check()
    await page.waitForTimeout(2000)
    

})
test('Dynamic xpath',async({page})=>{
    await page.goto('https://www.google.com/')
    //contains, starts-with, ends-with
    await page.locator('//textarea[starts-with(@data-ved,"0ahUKE")]').fill('RomanReigns')
    //text()
    const googleText=await page.locator('//div[text()="Google offered in:  "]').innerText()
    console.log(googleText);
    
    await page.keyboard.press('Enter')
    await page.waitForTimeout(2000)
})