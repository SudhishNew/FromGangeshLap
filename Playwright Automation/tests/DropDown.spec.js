import{test, expect} from "@playwright/test"

test('DropDown', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    //by selecOption
  const dropdown=  await page.locator('#country').scrollIntoViewIfNeeded();
    await page.locator('#country').selectOption({value:'germany'})
     await expect(await page.locator('#country option:checked')).toHaveText('Germany')
    const selectedCountry=await page.locator('#country option:checked').innerText()
    console.log(selectedCountry)
     const unSelectedCountries= await page.locator('#country option:not(:checked)').allInnerTexts()
    console.log(unSelectedCountries)
   const totalCountries= await page.locator('#country option').allInnerTexts()
   for(let i of totalCountries){

    console.log(i)
   }


    // by label
    // await page.locator('#country').selectOption({label:'United Kingdom'})
    await page.waitForTimeout(3000)


})

test.only('Multi dd', async({page})=>{

  await page.goto("https://testautomationpractice.blogspot.com/")
  const multivalues=await page.locator("#colors")
  await page.locator('#colors').scrollIntoViewIfNeeded()

  
  await multivalues.selectOption([{label:"Red"}, 
    {label:"Blue"},
     {label:"Green"}])
     await expect(multivalues).toHaveValues(["red","blue","green"])

     
     await page.waitForTimeout(3000)

})