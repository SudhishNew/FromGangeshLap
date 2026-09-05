import{test,expect} from "@playwright/test"
 test("Windows", async({page,context})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
   //  await page.click('//button[text()="New Tab"]')

    const [newTab]=await Promise.all([context.waitForEvent("page"), 
      await page.click('//button[text()="New Tab"]') ])

      await newTab.locator('(//input[@title="search"])[1]').fill('Tejus')
      await expect(newTab).toHaveURL('https://www.pavantestingtools.com/')
      
      await page.waitForTimeout(3000)
      await page.bringToFront()
      await page.waitForTimeout(3000)

    
 })

 test.only("popup window", async({page,context})=>{
   await page.goto('https://testautomationpractice.blogspot.com/')
   const [newPopup]=await Promise.all([context.waitForEvent('page'), 
      await page.locator('#PopUp').click()])
      await newPopup.locator('[aria-label="Toggle navigation"]').click()
      await page.waitForTimeout(2000)
      await page.bringToFront()

    

 })