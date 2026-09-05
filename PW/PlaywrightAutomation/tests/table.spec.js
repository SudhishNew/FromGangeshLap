import{test} from "@playwright/test"
test('Table', async({page})=>{
    await page.goto('https://www.qaplayground.com/practice/simple-table')
    const table=await page.locator('id="books-table"')
    //header
    const headr=await page.locator('table thead tr th').allTextContents()
    // const headText=await headr.allTextContents()
    // for(let e of headr){
    //     console.log(e)
    // }

    const row3=await page.locator('table[id="books-table"] tbody tr:nth-child(3)  td:nth-child(2)').textContent()
    console.log(row3)

    const row5=await page.locator('table[id="books-table"] tbody tr:nth-child(5) td').allTextContents()
    console.log(row5)
    const totalrow=await page.locator('table[id="books-table"] tbody tr').count()
    console.log(totalrow)
    await page.waitForTimeout(3000)

})