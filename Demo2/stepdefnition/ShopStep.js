const {Given,When} = require ('@cucumber/cucumber')
const {LoginPage} = require ('../Pages/Login.js')
const {Shop} =require ('../Pages/Shop.js')

let lob
let sob

Given('User enters into the catagory page after complition of login', async function () {

    lob=new LoginPage(this.page)
    await lob.navigate()
    await lob.userAndPassword()
    await lob.dropDown()
    await lob.termCheckBox()
    await lob.signIn()

  
});

When('User selects the catagory', async function () {
    sob=new Shop(this.page)
    await sob.catagoryLink()
    await sob.enterName("Sudhish")
  
});

When('User enters the First name and mail and password', function () {
 
});

When('User checks the ice cream box and  select DD', function () {
  
});

When('User checks the radio and submit button', function () {
 
});