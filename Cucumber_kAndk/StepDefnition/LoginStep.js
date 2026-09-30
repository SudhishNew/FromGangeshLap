const {Given, When, And, Then} = require ("@cucumber/cucumber")

const {expect}= require ('@playwright/test')
const LoginPage = require ('../Pages/login')
const data =require ('../TestData/detail.json')

console.log(data.Url);





// let l=new LoginPage(this.page)
Given('User should navigate into the login page', async function () {
 
  let l=new LoginPage(this.page)
  await l.navigate(data.Url)
  
});

When('User enters the UserName', async function () {

  let l=new LoginPage(this.page)
  await l.uName(data.usname)
});

When('User enters the Password', async function () {
  let l= new LoginPage(this.page)
  await l.pwd(data.psd)
});

When('User selects the radio button',async  function () {
  let l=new LoginPage(this.page)
  await l.radioBtn()
 
});

When('User selects the DD', async function () {
 let l=new LoginPage(this.page)
 await l.dropDown()
});

When('User checks the Checkbox', async function () {

  let l=new LoginPage(this.page)
  await l.checkTerms()
});

When('User clicks the signin button', async function () {
  let l= new LoginPage(this.page)
  await l.signInBtn()
});

Then('User Should navigates the Catagory page',async  function () {
  let l=new LoginPage(this.page)
  // await this.page.waitForURL('https://rahulshettyacademy.com/angularpractice/shop')
  // await expect(this.page).toHaveURL('https://rahulshettyacademy.com/angularpractice/shop')
  await l.pageValidate()
});
