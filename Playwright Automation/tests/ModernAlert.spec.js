import{test,expect} from "@playwright/test"

test('ModernAlert', async({page})=>{
    await page.goto('https://letcode.in/alert')
    await page.locator('#modern').click()
    const text=await page.locator('//p[text()="Modern Alert - Some people address me as sweet alert as well "]').textContent()
 console.log(text)
 await page.waitForTimeout(3000)
   await page.getByLabel('close').click()
   
 
})