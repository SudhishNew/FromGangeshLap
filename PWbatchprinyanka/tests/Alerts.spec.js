import {test,expect} from "@playwright/test"

test.only("Simple Alert", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    
    page.on('dialog', async(dialog)=>{
        await page.waitForTimeout(3000)
        await expect.soft(dialog.type()).toBe('alert')
        const msg=dialog.message()
        console.log(dialog.type(),msg)
        dialog.accept()
            
    })
    await page.locator('[id="alertBtn"]').click()
    
} )

test("confirm alert", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')



    await page.getByText('Confirmation Alert').scrollIntoViewIfNeeded()
    page.on('dialog', async(dialog)=>{
        await page.waitForTimeout(3000)
        const msg=dialog.message()
        const typ=dialog.type()
        dialog.dismiss()
        console.log(typ, msg)
    })
    await page.getByText('Confirmation Alert').click()

})

test.only("Prompt alert", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('[onclick="myFunctionPrompt()"]').scrollIntoViewIfNeeded()

    page.on('dialog', async(dialog)=>{
        await page.waitForTimeout(3000)
        const typ= dialog.type()
        const msg=dialog.message()

    //    await expect(dialog.accept('Sudhish')).toContain('Harry Potter')
    dialog.accept('Sudhish')
        console.log(typ,msg)
    })
    await page.locator('[onclick="myFunctionPrompt()"]').click()
    const text=await page.locator("//p[contains(text(),'How are you today?')]").textContent()
    console.log(text)
    await expect(text).toContain('Sudhish')
    await page.waitForTimeout(3000) //#prompt
     
    
    // page.on('dialog', async(dialog)=>{
    //     await page.waitForTimeout(3000)
    //     const typ= dialog.type()
    //     const msg=dialog.message()
    //     dialog.accept('Sudhish')
    //     console.log(typ,msg)
    // })
    // await page.locator('#prompt').click()
    // // const text=await page.locator("//p[contains(text(),'How are you today?')]").textContent()
    // // console.log(text)
    // await page.waitForTimeout(3000)

    // await page.locator('#modern').click()
    // await page.waitForTimeout(3000)
    // await page.getByLabel('close')


    
})



