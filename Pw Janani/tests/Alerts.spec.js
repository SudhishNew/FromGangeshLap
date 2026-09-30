import {test,expect} from "@playwright/test"

test('Simple Alert', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('[id="alertBtn"]').scrollIntoViewIfNeeded()

    page.on('dialog', async(alert)=>{

        await page.waitForTimeout(2000)
        const msg=await alert.message()  //it will prints the message content in the alert box
       const type= await alert.type()    // it will gives the type of the alert
       console.log(msg);
       console.log(type);
        await alert.accept('Janani')


    })
    await page.getByText('Prompt Alert').click()
    await expect(page.locator('#demo')).toContainText('Janani')
})

test('Modern alert', async({page})=>{
    await page.goto('https://letcode.in/alert')
    await page.locator('#modern').click()
    await page.getByLabel('close').click()
    await page.waitForTimeout(3000)

})

