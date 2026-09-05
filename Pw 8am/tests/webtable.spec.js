import{test,expect} from "@playwright/test"

test("Static table", async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    //to get single data of th of tr
    const singletext=await page.locator('//th[text()="Author"]').innerText()
    //single data using css
   const seldata= await page.locator('[name="BookTable"] tbody tr:nth-child(2) td:nth-child(3)').innerText()
   //th data
  const thdata= await page.locator('[name="BookTable"] tbody tr:nth-child(1)').allInnerTexts()
  //single column values
  const columndata=await page.locator('[name="BookTable"] tbody tr td:nth-child(4)').allInnerTexts()
    console.log(singletext)
    console.log(seldata)
    // console.log(thdata)
    for(let i of thdata){
        console.log(i)
    }
    // console.log(columndata)
    for(let i of columndata){
        console.log(i)
    }
})

test.only("Dynamic table", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('[id="taskTable"]').scrollIntoViewIfNeeded()
    //3rd row data
   const thirdrow= await page.locator('[id="taskTable"] tbody tr:nth-child(3)').allTextContents()
    for(let i of thirdrow){
        console.log(i)
    }
    //1st column
    const firstcolumn=await page.locator('//table[@id="taskTable"]/tbody/tr/td[1]').allTextContents()
    for(let i of firstcolumn){
        console.log(i)
    }
    //single cell data
    const single=await page.locator('(//table[@id="taskTable"]/tbody/tr/td[3])[2]').innerText()
    console.log(single)
})
