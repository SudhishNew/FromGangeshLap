import {test, expect} from "@playwright/test"

test("Simple alert", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog',async (alrt)=>{
        await page.waitForTimeout(2000)
        await  alrt.accept()
        console.log(await alrt.type())
    })
    await page.locator('[id="alertBtn"]').click()
    
})

test("confirm alert",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog', async(alt)=>{
        await page.waitForTimeout(2000)
        const msg=await alt.message()
        console.log(msg)
        console.log(alt.type())
        await alt.dismiss()
        await expect(alt.message()).toBe('Press a button!')
    })
    await page.locator('[id="confirmBtn"]').click()
} )

test("prompt alert", async({page})=>{

    await page. goto('https://testautomationpractice.blogspot.com/')
    const name='Tejas'
    page.on('dialog', async(alt)=>{
        await page.waitForTimeout(2000)
        console.log(await alt.message())
        await alt.accept(name)
    })
    await page.locator('//button[text()="Prompt Alert"]').click()
    const msgPassed=await page.locator('[id="demo"]').innerText()
    console.log(msgPassed)
     await page.waitForTimeout(2000)
})

test.only("modern Alert", async({page})=>{
    await page.goto('https://letcode.in/alert')
    await page.locator('#modern').click()
    await page.waitForTimeout(2000)
    await page.locator('[aria-label="close"]').click()
})