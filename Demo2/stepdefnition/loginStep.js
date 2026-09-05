const {Given, When} = require ('@cucumber/cucumber')
const {LoginPage} = require ('../Pages/Login.js')

let lob;

Given('User navigates to the Rahul shetty login page', async function () {
  // Write code here that turns the phrase above into concrete actions
  lob= new LoginPage(this.page)
  await lob.navigate()
 
});

When('User enters the UserName And Password', async function () {
  // Write code here that turns the phrase above into concrete actions
  lob=new LoginPage(this.page)
  await lob.userAndPassword()
});

When('User Selects the drop down', async function () {
  // Write code here that turns the phrase above into concrete actions
 lob =new LoginPage(this.page)
 await lob.dropDown()
});

When('User checks the checkbox', async function () {
  // Write code here that turns the phrase above into concrete actions
  lob =new LoginPage(this.page)
  await lob.termCheckBox()
  
});

When('User clicks the signin button',async  function () {
  // Write code here that turns the phrase above into concrete actions
  lob =new LoginPage(this.page)
  await lob.signIn()
});
