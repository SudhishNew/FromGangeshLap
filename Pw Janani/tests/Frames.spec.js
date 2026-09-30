import{test} from "@playwright/test"
test ('frames', async({page})=>{
    await page.goto('https://letcode.in/frame/')
    //by using frame()
    // await page.frame('firstFr').locator('[name="fname"]').fill('Janani')//
    //by using url
    // await page.goto('https://letcode.in/frameui')
    // await page.locator('[name="fname"]').fill('Janani')
    //by using frameLocator()
    // await page.frameLocator('#firstFr').locator('[name="fname"]').fill('janani')

    // inner frame inside a inner frame
   await page.frame('firstFr').frameLocator('[src="/innerframe"]').getByPlaceholder('Enter email').fill('janani123@gmail.com')
    await page.waitForTimeout(2000)
})

test ('dragAndDrop', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
//by using dragTo()
// const source=await page.locator('[id="draggable"]')
// const destination=await page.locator('[id="droppable"]')
// await source.dragTo(destination)
//dragAndDrop()
await page.dragAndDrop('[id="draggable"]','[id="droppable"]' )

await page.waitForTimeout(2000)
})