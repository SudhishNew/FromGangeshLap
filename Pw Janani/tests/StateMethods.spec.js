
import {test} from "@playwright/test"

test('StatesCheck', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const isedit=await page.locator('#name').isVisible()
    console.log(isedit);
    const isenable=await page.locator('//button[text()="START"]').isDisabled()
    console.log(isenable)
    await page.locator('#sunday').check()
    const ischeck=await page.locator('#sunday').isHidden()
    console.log(ischeck);
    
    
})