import {test} from "@playwright/test"

test('Static table', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //single cell data

    const SingleData=await page.locator('//td[text()="Animesh"]').innerText()
    const singlevalue=await page.locator('(//td[text()="Javascript"])[1]').innerText()
    console.log(SingleData)
    console.log(singlevalue);
    
})

test('Dynamic table', async({page})=>{
     await page.goto('https://testautomationpractice.blogspot.com/')
     //single data
     const singledata=await page.locator('#taskTable tbody tr:nth-child(1) td:nth-child(3)').innerText()
     console.log(singledata);

     //single row
     const rowdata=await page.locator('#taskTable tbody tr:nth-child(3)').allTextContents()
     console.log((rowdata));

     //single column data
      const columndata=await page.locator('#taskTable tbody tr td:nth-child(4)').allTextContents()
     console.log((columndata));
    
     //spefified row data
     const specrowdata=await page.locator('//tbody[@id="rows"]/tr/td[text()="System"]/following-sibling::td').allTextContents()
     console.log((specrowdata));

     
     

})