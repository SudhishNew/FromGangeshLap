import {test, expect} from "@playwright/test"

test('Amazon', async({page,context})=>{
    await page.goto('https://www.amazon.in/')
    await page.locator('[id="twotabsearchtextbox"]').fill('iphone 17')
    await page.keyboard.press('Enter')

    await Promise.all([context.waitForEvent('page'),page.locator("(//span[text()='iPhone 17 256 GB: 15.93 cm (6.3″) Display with Promotion, A19 Chip, Center Stage Front Camera for Smarter Group Selfies, Improved Scratch Resistance, All-Day Battery Life; Black'])[1]").click()])
    // console.log(await context.pages());
    await page.locator("(//span[text()='iPhone 17 256 GB: 15.93 cm (6.3″) Display with Promotion, A19 Chip, Center Stage Front Camera for Smarter Group Selfies, Improved Scratch Resistance, All-Day Battery Life; Black'])[1]").click()
    

//    const newPage= await context.waitForEvent('page')
  const pages= await context.pages()
  console.log(pages.length);
  
  for(let p of pages){
   const title= await p.title()
   console.log(title);

   if(title=='iPhone 17 256GB'){
    const brand=await p.locator('table[role="list"] tbody tr:nth-child(1) td:nth-child(2) span')
    await expect(brand).toHaveText('Apple')
   }

   

  }
 
    // const text=await page.locator('table[role="list"] tbody tr:nth-child(1) td:nth-child(2) span').textContent()
    // console.log(text);
    
})      