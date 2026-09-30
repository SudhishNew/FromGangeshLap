import {test, expect} from "@playwright/test"

test('Alerts', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async(popup)=>{
        await page.waitForTimeout(2000)
        console.log(popup.type(), popup.message());
        
        await popup.accept('Prashanth')

    })
    await page.getByRole('button', {name:'Prompt Alert'}).click()
    await expect(page.locator('#demo')).toContainText('Prashanth')
    await page.waitForTimeout(3000)
})