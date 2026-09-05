const {chromium} = require ("@playwright/test")
const {Given, When, Then} = require ("@cucumber/cucumber")
const {LoginPage} = require ('../pages/Login.js')

let lobj
Given('User navigates to the RahulShetty login  page',{timeout:30000}, async function () {
  // Write code here that turns the phrase above into concrete actions
  // const browser=await chromium.launch({headless:false})
  // const page=await browser.newPage()
  // await page.goto("https://rahulshettyacademy.com/client")
  // await page.close()
  // await browser.close()
  lobj=new LoginPage(this.page)
  await lobj.navigate()
  
  await this.page.waitForTimeout(2000)
});

When('User Enters the userName And Password',async  function () {
  // Write code here that turns the phrase above into concrete actions
  // lobj=new LoginPage(this.page)
  await lobj.userAndPassword()
});

When('User clicks the Submit button', async function () {
  // Write code here that turns the phrase above into concrete actions
  //  lobj=new LoginPage(this.page)
   await lobj.signinbtn()
});