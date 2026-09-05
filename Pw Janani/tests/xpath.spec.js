import {test} from "@playwright/test"

test('Xpath', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //using relative xpath with attribute
    await page.locator('//label[@for="male"]').check()
    await page.locator('//input[@value="sunday"]').click()
    //by using text
    await page.locator('//label[text()="Monday"]').check()
    await page.locator('//label[text()="Tuesday"]').check()
     await page.locator('//input[@value="sunday"]').check()
     //by using and
     await page.locator('//input[@type="checkbox" and  @value="wednesday"]').check()
     //by using position
     await page.locator('(//label[@class="form-check-label"])[7]').check()
    await page.waitForTimeout(3000)
    
})


test('Xpath revise', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //absolute xpath
    // const titleText=await page.locator('/html/body/div[4]/div[2]/div[2]/div[2]/header/div/div[2]/div[2]/div/div/div/div/h1').textContent()

    //relative xpath
    const titleText=await page.locator('//h1[@class="title"]').textContent()
    await page.locator('(//label[@class="form-check-label"])[5]').check()
    console.log(titleText)
    await page.waitForTimeout(2000)
    //axes xpath
    await page.locator('//span[text()="iPhone Air 512 GB: Thinnest iPhone Ever, 16.63 cm (6.5″) Display with Promotion up to 120Hz, Powerful A19 Pro Chip, Center Stage Front Camera, All-Day Battery Life; Sky Blue"]/ancestor::div[@class="a-section a-spacing-small a-spacing-top-small"]/child::div[@class="puisg-row puis-desktop-list-row"]/descendant::form/descendant::span[@class="a-button-inner"]/span')
    
})