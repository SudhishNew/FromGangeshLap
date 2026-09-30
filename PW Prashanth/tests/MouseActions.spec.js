import{test} from "@playwright/test"

test('mouseActions', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //double click()
    await page.getByText('Copy Text').dblclick()
    //scroll
     await page.getByText('Point Me').scrollIntoViewIfNeeded()
    //hover
    await page.getByText('Point Me').hover()
    const hoverText=await page.locator('[class="dropdown-content"] a').allInnerTexts()
    console.log(hoverText);
    //dragAndDrop
    const source=await page.locator('[id="draggable"]')
    const destination=await page.locator('[id="droppable"]')
    // await source.dragTo(destination)

    await page.dragandDrop('[id="draggable"]', '[id="droppable"]')

    
    //screenshot
    await page.screenshot({path:'SreenShot/fullPage.png',fullPage:true})
    await page.getByText('Point Me').screenshot({path:'SreenShot/hover.png'})
    await page.waitForTimeout(2000)
    
})