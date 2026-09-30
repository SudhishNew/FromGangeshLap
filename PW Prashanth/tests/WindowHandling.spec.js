import {test} from "@playwright/test"

test('Tab Handling', async({page,context})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await Promise.all([context.waitForEvent('page'),page.locator('[onclick="myFunction()"]').click()])
    const pages=await context.pages()
    console.log(pages.length);

    for (let p of pages){

       if(p.title()=="SDET-QA Blog"){
        await p.locator('[title="search"][name="q"]').fill('Roman reigns')
       }  
    } 
    await page.waitForTimeout(2000)    
})

test('Windows handlind', async ({page,context})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const [NewPage]=await Promise.all([ context.waitForEvent('page'),page.locator('#PopUp').click()])

    const pages=await context.pages()
    
    console.log(pages.length);

    for(let p of pages){
       const title= await p.title()
       console.log(title);

       if(title=='Selenium'){
        await p.locator('//a[text()="Visit Conference Website for more information!"]').click()
         await page.waitForTimeout(2000)
       }
       
    }

    await page.waitForTimeout(2000)
    
})