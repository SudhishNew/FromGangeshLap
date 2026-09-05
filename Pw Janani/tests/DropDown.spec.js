import {test,expect} from "@playwright/test"

test('Single DD', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
     await page.locator('#country').scrollIntoViewIfNeeded()
    await page.locator('#country').selectOption({index:4})
    const selectedCountry=await page.locator('#country option:checked').innerText()
    console.log(selectedCountry);

    await expect(page.locator('#country option:checked')).toHaveText('France')
    await page.waitForTimeout(2000)
    
})

test('multi DD', async({page})=>{
     await page.goto('https://testautomationpractice.blogspot.com/')
     await page.locator('#colors').scrollIntoViewIfNeeded()
      await page.locator('#colors').selectOption([{value:'blue'},{label:'Yellow'}, {index:2}])
      const selectedColours=await page.locator('#colors option:checked').allInnerTexts()
      console.log(selectedColours);
      await expect(page.locator('#colors option:checked')).toHaveText([ 'Blue', 'Green', 'Yellow' ])
      
     await page.waitForTimeout(2000)
})