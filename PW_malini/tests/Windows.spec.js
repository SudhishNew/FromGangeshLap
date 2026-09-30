import {test,expect} from "@playwright/test"

test('Tabs', async({page,context})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await Promise.all([context.waitForEvent('page'),  page.getByRole('button',{name:'New Tab'}).click()])
   
   const pages=await context.pages()
   const pageCount= await pages.length
     console.log(pageCount);
    //  console.log(pages);

    for(let p of pages){
       const pageTitle= await p.title()
       console.log(pageTitle);

       if(pageTitle=="SDET-QA Blog"){
        await p.locator('[title="search"][name="q"]').fill('Roman reigns')
       }
       
    }
    await page.waitForTimeout(2000)
      

})

test('windows', async({page,context})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await Promise.all([context.waitForEvent('page'), page.locator('#PopUp').click()])
    const pages=await context.pages()
    console.log(await pages.length)
    for(let p of pages){
      const pTitle=await p.title()
        console.log(pTitle);
        const pURL=await p.url()
        console.log(pURL);
        await p.waitForURL(pURL)
        
        // if(pTitle=="Selenium"){
        //     await p.locator('[href="https://seleniumconf.com/"]').click()
        // }
        if(pURL=="https://playwright.dev/"){
          await p.locator('.getStarted_Sjon').click()
       }
        
    }

    await page.waitForTimeout(2000)

})