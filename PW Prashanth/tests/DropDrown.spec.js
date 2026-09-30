import {test,expect} from "@playwright/test"

test.only('Single DD', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
     await page.locator('#country').scrollIntoViewIfNeeded()
    //value
    // await page.locator('#country').selectOption({value:'germany'})
    //label
    // await page.locator('#country').selectOption({label:'France'})
    //index
    await page.locator('#country').selectOption({index:5})
    const selectedCountry=await page.locator('#country option:checked')
    await expect.soft(selectedCountry).toHaveText('australia')
    const SlectedText=await page.locator('#country option:checked').innerText()
    console.log(SlectedText)

    await page.waitForTimeout(3000)
})

test('Multi DD', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#colors').selectOption([{value:'blue'}, {label:'Yellow'}, {index:4}])
    const selectedColors=await page.locator('#colors option:checked').allInnerTexts()
    console.log(selectedColors);
    
    await expect(page.locator('#colors option:checked')).toHaveText([ 'Blue', 'Yellow', 'Red' ])

     await page.waitForTimeout(3000)
})
