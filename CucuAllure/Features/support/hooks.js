const {Before, After} = require ('@cucumber/cucumber')
const {chromium}= require ('@playwright/test')

Before(async function(){
    this.browser=await chromium.launch({headless:false})
    // this.window=await browser.newContext()
    this.page=await this.browser.newPage()

})

After(async function(){
  await   this.page.close()
//    await  this.window.close()
   await  this.browser.close()
})