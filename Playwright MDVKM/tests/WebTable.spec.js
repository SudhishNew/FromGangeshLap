import{test,expect} from "@playwright/test"

test("Static web table", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page.locator('//table[@name="BookTable"]')).toBeVisible()
    //headers
    const thValues=await page.locator('//table[@name="BookTable"]/tbody/tr/th').allInnerTexts()
    console.log(thValues)
    await expect(page.locator('//table[@name="BookTable"]/tbody/tr/th')).toContainText([ 'BookName', 'Author', 'Subject', 'Price' ])

    //get all data from a single row
    const rowdata=await page.locator('(//table[@name="BookTable"]/tbody/tr)[2]/td').allTextContents()
    const rdcount=await page.locator('(//table[@name="BookTable"]/tbody/tr)[2]/td').count()
    console.log(rdcount)
    await expect(page.locator('(//table[@name="BookTable"]/tbody/tr)[2]/td')).toHaveText([ 'Learn Selenium', 'Amit', 'Selenium', '300' ])

    //get single data 
    const singleData=await page.locator('(//table[@name="BookTable"]/tbody/tr/td[text()="Selenium"])[2]').innerText()
    console.log(singleData)
    await expect(page.locator('(//table[@name="BookTable"]/tbody/tr/td[text()="Selenium"])[2]')).toHaveText('Selenium')


})

test.only("Dyanamic web table", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('[id="taskTable"]').scrollIntoViewIfNeeded()
    //headers
    const allheaders=await page.locator('[id="taskTable"] thead tr th').allTextContents()
    console.log(allheaders)
    
    //rows
    const rows= await page.locator('[id="taskTable"] tbody tr:nth-child(2)').allInnerTexts()
    // const rowCount=  rows.count()
   for(let i of rows){
     console.log(i)
   }
    // console.log(rowCount)

    //single cell
    const singlecell=await page.locator('[id="taskTable"] tbody tr:nth-child(3) td:nth-child(4)').innerText()
    console.log(singlecell)
    await page.waitForTimeout(2000)
})