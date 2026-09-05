import {test,expect} from "@playwright/test"
test('Simple Alert',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //event listener
    page.on('dialog', async(alert)=>{
        const typeOfAlert=alert.type()
        const msg=alert.message()
        console.log(msg)
        console.log(typeOfAlert)

        await alert.accept()
    })
    await page.locator('button[id="alertBtn"]').click()
})

test('Confirm Alert',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //event listener
    page.on('dialog', async(alert)=>{
        const typeOfAlert=alert.type()
        const msg=alert.message()
        console.log(msg)
        console.log(typeOfAlert)
        await page.waitForTimeout(3000)

        await alert.dismiss()
    })
    await page.locator('button[id="confirmBtn"]').click()
})

test('Promt Alert',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //event listener
    page.on('dialog', async(alert)=>{
        const typeOfAlert=await alert.type()
        const msg=await alert.message()
        console.log(msg)
        console.log(typeOfAlert)
         await page.waitForTimeout(3000)
        await alert.accept("sudhish")
        //  await expect(await page.locator('#myName')).toHaveText('Your name is: sudhish')

        
   
    })
    await page.locator('[id="promptBtn"]').click()
})

test.only('Alerts', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog', async(alerts)=>{

        if(alerts.type()=='alert'){
            await alerts.accept()
        } else if(alerts.type()=='confirm'){
             if(alerts.message()=='Press a button!'){
                await alerts.accept()
             }else{
                await alerts.dismiss()
             }
                
        }
        else if(alerts.type()=='prompt'){
              if(alerts.message()){
                await alerts.accept()

              }else{
                await alerts.dismiss()
              }
        }

    })
    await page.locator('[id="promptBtn"]').click()

})

