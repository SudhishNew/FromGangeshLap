import {test,expect} from "@playwright/test"
test("DD", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //   select by value
    // const selected=await page.locator('#country').selectOption({value:'germany'})
    // console.log(selected)
    //select by label
//     await page.locator('#country').selectOption({label:'United Kingdom'})
//    const selected=await page.locator('#country option:checked').innerText()
//     console.log(selected)
       const selected=await page.locator('#country').selectOption({index:7})
         console.log(selected)
    // await expect(page.locator('#country option:checked')).toHaveText('United Kingdom')
   const alltext= await page.locator('#country option').allInnerTexts()
//    for(let i of alltext){
//     console.log(i)
//    }
    await expect(page.locator('#country option')).toHaveText(["United States","Canada","United Kingdom","Germany","France","Australia","Japan","China","Brazil", "India"])
    await page.waitForTimeout(2000)
})

test("Single DD", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#country').scrollIntoViewIfNeeded()
    await page.locator('#country').selectOption({value:'uk'})
    const selectedCountry= await page.locator('#country option:checked').innerText()
    console.log(selectedCountry)
    const allUncheckedCountries=await page.locator('#country option:not(:checked)').allInnerTexts()
    console.log(allUncheckedCountries)
    await expect( page.locator('#country option:checked')).toHaveText('United Kingdom')
    await page.waitForTimeout(2000)
})

test.only("Mulitiple DD",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.locator('//label[text()="Name:"]').fill('Tejus')
    await page.locator('#colors').scrollIntoViewIfNeeded()
    await page.locator('#colors').selectOption([{value:'blue'},{label:'Yellow'},{index:4}])
   const allSelectedColors= await page.locator('#colors option:checked').allInnerTexts()
   console.log(allSelectedColors)
   await expect(page.locator('#colors option:checked')).toHaveText(['Blue','Yellow','Red'])
   await page.waitForTimeout(4000)

})