const {Given,When,And} = require ('@cucumber/cucumber')
const{LoginPage} = require('../pages/Login.js')
const{CatPage}= require ('../pages/Catagory.js')

Given('Continue to Catagory page',async  function () {
  // Write code here that turns the phrase above into concrete actions

  let l=new LoginPage(this.page)
  await l.navigate()
  await l.userAndPassword()
  await l.dropdown()
  await l.temrs()
  await l.signinbtn()
  
});

When('User select the catagory', async function () {
  // Write code here that turns the phrase above into concrete actions
  let c=new CatPage(this.page)
  await c.catgory()
});

When('User enters Name And Mail And Password', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('User checks the icecream box', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('User select the DD', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('User checks the radio', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('User clicks the submit', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});