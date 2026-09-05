import {test} from "@playwright/test"

test('Static table', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    //single data
    const singledata=await page.locator('//td[text()="Animesh"]').textContent()
   const data= await page.locator('(//td[text()="Selenium"])[1]').textContent()
    console.log(singledata, data)
    //single row
   const row= await page.locator('//table[@name="BookTable"]/tbody/tr[5]').allTextContents()
   for(let i of row){
    console.log(i)
   }
   //single column
   const column=await page.locator('//table[@name="BookTable"]/tbody/tr/td[2]').allTextContents()
    for(let i of column){
    console.log(i)
   }
   //column using css
  const price= await page.locator('[name="BookTable"] tbody tr td:nth-child(4)').allTextContents()
  for(let i of price){
    console.log(i)
  }
   
})

test.only('Dynamic table', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //single data
    const data=await page.locator('#rows tr:nth-child(1) td:nth-child(5)').textContent()
    console.log(data)
    //single row
    const rowdata=await page.locator('#rows tr:nth-child(3)').allInnerTexts()
    for(let i of rowdata){
        console.log(i)
    }

    //single column
    const columndata=await page.locator('#rows tr td:nth-child(4)').allInnerTexts()
    for(let i of columndata){
        console.log(i)
    }
})