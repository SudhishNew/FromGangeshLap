import {test} from '@playwright/test'

test('static table', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const txt=await page.locator('//td[text()="Java"]').innerText()
    const txt1=await page.locator('(//td[text()="Mukesh"])[2]').innerText()
    console.log(txt, txt1);
    

})

test('dynamic table', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //single cell data
   const sinlgeCellData= await page.locator('#taskTable tbody tr:nth-child(1) td:nth-child(4)').innerText()

   console.log(sinlgeCellData);

   //single row
   const rowData=await page.locator('//table[@id="taskTable"]/tbody/tr/td[text()="Firefox"]/parent::tr/td').allInnerTexts()
   console.log(rowData);

   //single coloumn
   const coloumnData=await page.locator('#taskTable tbody tr td:nth-child(2)').allTextContents()
   console.log(coloumnData);
   
   
})