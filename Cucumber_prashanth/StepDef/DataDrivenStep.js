const {Given, When, Then} = require('@cucumber/cucumber')
const LoginPage = require ('../Pages/login')


Given('User navigate into the login page with the {string}', async function (URL) {
     
    let l= new LoginPage(this.page)
    await l.navigateOne(URL)

});

When('User enters the {string}  and {string}', async function (UserName,Password) {
    let l=new LoginPage(this.page)
    await l.uNameOne(UserName)
    await l.pwdOne(Password)
    await l.radioBtn()
    await l.dropDown()
    await l.checkTerms()
    await l.signInBtn()
    await l.pageValidate()
  
});

