const {Given, When} = require ('@cucumber/cucumber')
const {chromium} = require ('@playwright/test')
const {LoginPage} =require ('../Pages/Login.js')  //tests/Pages/Login.js

let l; //object creation

Given('User navigates to the login page',async  function () {
  l=new LoginPage(this.page);
  await l.navigate()

});

When('User enters the valid username and valid password', async function () {
  await l.userAndPassword()
 
});

When('User Select student from DD', async function () {
  await l.dropDown()

})

When('User checks the terms Check box', async function () {
 await l.termCheckBox()
});

When('User clicks the login button', async function () {
  await l.signIn()
  await this.page.waitForTimeout(2000)
});