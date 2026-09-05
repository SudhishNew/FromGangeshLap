import{test,expect} from "@playwright/test"

test("Actions", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.fill('#email',"kalai123@gmail.com") // input field of mail
   const isemail= await page.locator('#email').getAttribute('class')
   console.log(isemail)
    await page.click('//button[text()="START"]')
    await page.check('(//input[@name="gender"])[1]')
    //  await page.waitForTimeout(2000)
    //  await page.check('(//input[@name="gender"])[1]')
     await page.check('#sunday')
      await page.check('#sunday')
     const ischeck= await page.locator('#sunday')

    //  console.log(ischeck)
    await expect.soft(page.locator('//label[text()="Sunday"]')).toHaveText('Sunday')
      await page.locator('select[id="country"]').selectOption({index:6})
      console.log(await page.locator('select[id="country"] option').allInnerTexts())
   
     



    await page.waitForTimeout(2000)

})

test.only("amzn", async({page})=>{
    await page.goto('https://www.amazon.in/')
    // await page.locator('[id="twotabsearchtextbox"]').fill('iphone')
    // await page.locator('#nav-search-submit-button').click()
    // // await page.pause()

    // await page.locator('//div[@class="a-row a-color-secondary"]/h2/span[@class="a-size-medium a-color-base"]').first().waitFor()
    // const allmobiles=await page.locator('//div[@class="a-row a-color-secondary"]/h2/span[@class="a-size-medium a-color-base"]').allInnerTexts()
    // // console.log(allmobiles)
    // for(let i of allmobiles){
    //     console.log(i)
    // }
    await page.locator('[id="twotabsearchtextbox"]').fill('iphone')
    await page.locator(' (//div[@class="left-pane-results-container"]/div)[4]').click()
    await page.waitForTimeout(2000)
})