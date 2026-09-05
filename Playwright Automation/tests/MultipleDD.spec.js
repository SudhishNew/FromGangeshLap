import {test,expect} from "@playwright/test"

test('MultiDD', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
   const multi= await page.locator('#colors')
   await multi.scrollIntoViewIfNeeded()
   await multi.selectOption([{value:'red'},
    {label:'Blue'},
    {index:2}
   ])
   await page.waitForTimeout(3000)
   const allText=await page.locator('select[id="colors"] option ').allInnerTexts()
  for(let e of allText){
    console.log(e)
  }
  await expect(multi).toHaveValues(["red","blue","green"])

  const selectedColours=await page.locator('select[id="colors"] option:checked').allInnerTexts()
  console.log(selectedColours)
  await expect(await page.locator('select[id="colors"] option:checked')).toHaveText(['Red', 'Blue', 'Green'])
   
  const unselectedColours=await page.locator('select[id="colors"] option:not(:checked)').allInnerTexts()
    // console.log(allText)
    console.log(unselectedColours)

    await expect(await page.locator('select[id="colors"] option:not(:checked)')).not.toHaveText(['Yellow', 'Red', 'White', 'Green'])

})