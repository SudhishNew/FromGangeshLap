import {test} from "@playwright/test"

test("PageMethods", async({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await page.fill('#username', 'rahulshettyacademy')
    console.log(await page.locator('#username').isEditable())
   const intval= await page.inputValue('#username')
   console.log(intval)
    await page.fill('#password', 'Learning@830$3mK2')
    console.log(await page.locator('#password').isVisible())
    const atr=await page.getAttribute('#password','class')
    console.log(atr)

    await page.check('//span[text()="Admin"]')
    await page.selectOption('[data-style="btn-info"]',{label:'Student'})
    console.log(await page.locator('[data-style="btn-info"] option:nth-child(3)').isHidden())
    await page.check('#terms')
    console.log(await page.locator('#terms').isChecked())
    await page.click('#signInBtn')
    // await page.waitForTimeout(5000)
    await page.goBack()
    console.log(page.url())
     await page.waitForTimeout(2000)

})