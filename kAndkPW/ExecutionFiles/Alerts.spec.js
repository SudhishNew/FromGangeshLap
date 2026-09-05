import {test,expect} from "@playwright/test"

test('Alerts', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // page.on('dialog', async(alert)=>{
    //     await page.waitForTimeout(2000)
    //     await alert.accept()
    //     console.log(await alert.type())
    // })
    // await page.locator('[id="alertBtn"]').click()
    // await page.waitForTimeout(2000)

    // page.on('dialog', async(popup)=>{
    //       await page.waitForTimeout(2000)
    //     await popup.accept()
    //    const msg= await popup.message()
    //    const popuptype=await popup.type()
    //    console.log(msg)
    //    console.log(popuptype)
    //    await expect(popup.type()).toBe('confirm')

    // })

    // await page.locator('[id="confirmBtn"]').click()

    page.on('dialog', async (dailog)=>{
        await page.waitForTimeout(2000)

        await dailog.accept('Kailash')
       const type= await dailog.type()
        const msg=await dailog.message()
        console.log(type)
        console.log(msg)

    })
    await page.locator('[id="promptBtn"]').click()
    await expect( page.locator('[id="demo"]')).toHaveText('Hello Kailash! How are you today?')

})

test('Unknow alert', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async (alt)=>{
        const altType=await alt.type()
        console.log(altType)

        await page.waitForTimeout(2000)
        if(altType==='alert'){
            await alt.accept()
        }else if(altType==='confirm'){
            await alt.dismiss()
        }else if(altType==='prompt'){
            await alt.accept('Srinath')
        }

    })


    await page.locator('[id="alertBtn"]').click()


})

test('Modern Alert', async({page})=>{
    await page.goto('https://letcode.in/alert#google_vignette')
    await page.locat('#modern').click()
    await page.getByLabel('close')
    await page.waitForTimeout(2000)
})