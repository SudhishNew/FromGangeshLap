import {test} from "@playwright/test"

test('Static table', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    // const text=await page.locator('//td[text()="47.0 MB"]').innerText()
    const selText=await page.locator('//td[text()="Selenium"]').allInnerTexts()
    console.log(text);
    console.log(selText);
    
    
})

test('Dynamic table', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //tio get single cell data
    const singleCell=await page.locator('#taskTable tbody tr:nth-child(3) td:nth-child(4)').innerText()
    console.log(singleCell);
    
    //sigle row data
   const rowData= await page.locator('#taskTable tbody tr:nth-child(2) td').allInnerTexts()
   console.log(rowData);

   //single cloumn data
   const cloumnData=await page.locator('#taskTable tbody td:nth-child(4)').allTextContents()
   console.log(cloumnData);
   

   await page.locator('//table[@id="productTable"]/tbody/tr/td[text()="Laptop"]/following-sibling::td[2]/input').check()
   await page.waitForTimeout(2000)
   
    
})