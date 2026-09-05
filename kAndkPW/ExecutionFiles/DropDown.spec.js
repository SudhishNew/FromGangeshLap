import{test, expect} from  "@playwright/test"

test('Single DD', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //select by value
    // await page.locator('#country').selectOption({value:'france'})
    //select by label
    //  await page.locator('#country').selectOption({label:'Brazil'}) 
     //select by index
     await page.locator('#country').selectOption({index:2}) 
    const selectedOption=await page.locator('#country option:checked')
    await expect(selectedOption).toHaveText(' United Kingdom')
    await page.waitForTimeout(2000)

})

test('multi DD', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#colors').scrollIntoViewIfNeeded()
    await page.locator('#colors').selectOption([{index:0},{value:'yellow'},{label:'White'}])
    const selectedValues=await page.locator('select[id="colors"] option:checked').allInnerTexts()
    console.log(selectedValues);
    await expect( page.locator('select[id="colors"] option:checked')).toHaveText([ 'Red', 'Yellow', 'White' ])
    await page.waitForTimeout(3000)
})