import{test} from "@playwright/test"

test('Pagenation', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')
await page.locator('#productTable ').scrollIntoViewIfNeeded()
const pages=await page.locator('#pagination li')
const pageNo=await page.locator('#pagination li').count()
console.log(pageNo);
const HaveToSelect=['Laptop', '$7.99',10,14,'Wireless Mouse 20']

for(let i=0; i<pageNo; i++){

    if(i>0){
        await pages.nth(i).click()   // page1, page2, page3
    }


    const rows=await page.locator('#productTable tbody tr')
    const rowsNo=await page.locator('#productTable tbody tr').count()
    for(let j=0; j<rowsNo; j++){
       const row= await rows.nth(j).locator('td')
       const rowCount=await row.count()

       for(let k=0; k<rowCount; k++){

        const cell=await row.nth(k).textContent()

        const check=await row.locator('//input[@type="checkbox"]')
        if(HaveToSelect.includes(cell) || HaveToSelect.includes(Number(cell))){

            await check.check()
            console.log(cell);
            

        }

    }
    
}

}
await page.waitForTimeout(2000)




})