import {test,expect} from "@playwright/test"

test('Alerts', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')


    page.on('dialog', async(popup)=>{

       const type= await popup.type()
       const msg=await popup.message()
       console.log(type);
       console.log(msg);
       
        await page.waitForTimeout(2000)
        await popup.accept('Malini')
        
    })

    await page.getByText('Prompt Alert').click()
    await expect(page.locator('#demo')).toContainText('Malini')
    
    await page.waitForTimeout(2000)
})

test('Modern Alert', async({page})=>{
    await page.goto('https://letcode.in/alert/')
    await page.locator('#modern').click()
    await page.waitForTimeout(2000)
    await page.getByLabel('close').click()
})