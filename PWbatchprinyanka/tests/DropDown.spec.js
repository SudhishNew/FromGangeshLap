import {test,expect} from "@playwright/test"
 
test("Single Dropdown", async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
     await page.locator('#country').scrollIntoViewIfNeeded()
     //select by value
    await page.locator('#country').selectOption({value:'germany'})
    await page.waitForTimeout(2000)
    //select by text
    await page.locator('#country').selectOption({label:'Australia'})
    await page.waitForTimeout(2000)
    //select by index
     await page.locator('#country').selectOption({index:4})
    const  selectedCountry= await page.locator('#country option:checked').innerText()
    console.log(selectedCountry)
    await expect( page.locator('#country option:checked')).toHaveText('France')
    let len=selectedCountry.length
    await expect(selectedCountry).toHaveLength(len)

     const unselect=await page.locator('#country option:not(:checked)').allInnerTexts()
     await expect.soft(page.locator('#country option')).toHaveCount(10)
     
     console.log(unselect)
    await page.waitForTimeout(2000)

})

test.only("multi DD", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
   const colors= await page.locator('[id="colors"]').selectOption([{value:'yellow'},{value:'white'}])
   console.log(colors)
   const aelectedColors=await page.locator('[id="colors"] option:checked')
   await expect(aelectedColors).toHaveText(['Yellow','White'])
    await page.waitForTimeout(3000)
})