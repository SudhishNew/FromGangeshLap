const {After, Before} = require ("@cucumber/cucumber");
const{chromium} = require ("@playwright/test")

Before(async function(){
    this.browser=await chromium.launch({headless:false})
    this.tab=await this.browser.newContext()
    this.page=await this.tab.newPage()
}) 

After(async function () {
    
    await this.page.close()
    await this.tab.close()
    await this.browser.close()
    
})