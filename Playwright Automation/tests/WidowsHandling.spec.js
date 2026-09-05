import{test,expect} from "@playwright/test"
test('Widows', async({page,context})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
   const [newPage]= await  Promise.all([context.waitForEvent("page"),
     page.locator('//button[text()="New Tab"]').click()]) 

     await newPage.locator('[name="q"]').scrollIntoViewIfNeeded()
     await newPage.locator('[name="q"]').fill('George')
     await newPage.waitForTimeout(3000)
     await page.bringToFront()
     await newPage.waitForTimeout(3000)
})

test("PopUp window", async({page,context})=>{

  await page.goto('https://testautomationpractice.blogspot.com/')
  const [popup]=await Promise.all([context.waitForEvent("page"),
    page.locator('[id="PopUp"]').click()
  ])
  await popup.locator('[aria-label="Toggle navigation"]').click()
  await page.waitForTimeout(2000)
})

test ("Demo",async({page})=>{
  await page.goto('https://practicetestautomation.com/practice-test-login/')
  await page.locator('[id="username"]').fill('student')
  await page.locator('[id="password"]').fill(' Password123')
  await page.locator('[id="submit"]').click()
  await page.waitForTimeout(2000)
})

test.only("window", async({page,context})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
 const [newWindow]=await Promise.all([context.waitForEvent('page'),page.locator('[onclick="myFunction()"]').click()])
 await  page.locator('[onclick="myFunction()"]').scrollIntoViewIfNeeded()
 await newWindow.locator('[name="q"]').fill('playwright')
  await page.waitForTimeout(2000)
})