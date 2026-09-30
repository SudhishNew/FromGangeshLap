const {Given, When,Then} = require ('@cucumber/cucumber')
const LoginPage =require ('../Pages/login')



Given('User navigate into the Rahul shetty login page',async function () {

  let l= new LoginPage(this.page)
  await l.navigate()

});

When('User enters the userName and password', async function () {
   let l= new LoginPage(this.page)
   await l.uName()
   await l.pwd()
  
});

When('User clicks the admin radio btn',async function () {

   let l= new LoginPage(this.page)
   await l.radioBtn()
  
});

When('User selects the dropdown',async  function () {
  
   let l= new LoginPage(this.page)
   await l.dropDown()
   
});

When('User checks the checkbox',async function () {
   let l= new LoginPage(this.page)
   await l.checkTerms()
});

When('User hits the signin btn',async function () {

   let l= new LoginPage(this.page)
   await l.signInBtn()

});

Then('User Should seen the product page',async  function () {
 
   let l= new LoginPage(this.page)
   await l.pageValidate()
});