const {Given, When, Then} = require ('@cucumber/cucumber')
const {LoginPage} = require ('../pages/Log.js')

let lob
Given('User navigates to the login page', async function () {
  // Write code here that turns the phrase above into concrete actions
  lob=new LoginPage(this.page)
  await lob.navigate()
});

When('User enters the {string} and {string}',async  function (UserName , Password) {
  // Write code here that turns the phrase above into concrete actions
   lob=new LoginPage(this.page)
 await lob.userAndPassword(UserName , Password)
 await lob.dropDown()
 await lob.termCheckBox()
 await lob.signIn()

});

Then('User should see login page', async function () {
  // Write code here that turns the phrase above into concrete actions
  lob=new LoginPage(this.page)
 await lob.pageValidation()
});