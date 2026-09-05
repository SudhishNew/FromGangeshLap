import{test,chromium} from "@playwright/test"

// test("CSS id", async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await page.locator('').fill('Muniyappan')
//     await page.locator('').fill('muniyappan123@gmail.com')
//     await page.locator('').fill('1234567890')
//     await page.locator('').click()
// })

test('css', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#name').fill('kalaivani')
   const inval= await page.locator('#name').inputValue()
   console.log(inval)
    await page.locator('[name="start"]').click()
    await page.locator('#male').click()
    await page.locator('[value="sunday"]').check()
    await page.waitForTimeout(3000)
    await page.locator('[value="sunday"]').check()
    
   const atval= await page.locator('[value="sunday"]').getAttribute('type')
   console.log(atval)

    await page.locator('[ondblclick="myFunction1()"]').dblclick()
    await page.locator(' [class="form-check-input"] ').nth(8).check()
     await page.waitForTimeout(3000)
    
})