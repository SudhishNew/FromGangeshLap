import{test,expect} from "@playwright/test"

test('simple alert', async({page})=>{  // type=alert
    await page.goto('https://letcode.in/alert')

    page.on('dialog',async(alert)=>{
        await page.waitForTimeout(2000)
        const typ=alert.type()
        console.log(typ)
        await alert.accept()
        
    })
    await page.locator('#accept').click()
})

test('confirm alert', async({page})=>{  //type=confirm
 await page.goto('https://letcode.in/alert')

 page.on('dialog', async(alert)=>{
    await page.waitForTimeout(2000)
     const msg=await alert.message()
    const typ= await alert.type()
     console.log(typ)
     await alert.dismiss()
 })
 await page.locator('//button[text()="Confirm Alert"]').click()
})

test('promt alert', async({page})=>{  //type=prompt
 await page.goto('https://letcode.in/alert')

 page.on('dialog', async(alert)=>{
    await page.waitForTimeout(2000)
    const msg=await alert.type()
    console.log(msg)
    await alert.accept('mugesh')

 })
 await page.locator('#prompt').click()
})

test("Alert Handling", async({page})=>{
    await page.goto('https://letcode.in/alert')
    page.on('dialog', async(alert)=>{
        if(alert.type()=='alert'){
            expect(alert.type()).toBe('alert')
             await page.waitForTimeout(2000)
            await alert.accept()
        }else if(alert.type()=='confirm'){
             await page.waitForTimeout(2000)
            await alert.dismiss()
        }else if(alert.type()=='prompt'){
            await page.waitForTimeout(2000)
            await alert.accept('Ganesh')
        }

    })
    await page.locator('#accept').click()
    
})
