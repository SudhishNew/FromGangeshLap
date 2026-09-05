 const {Given,When,Then}= require ("@cucumber/cucumber");
const { LoginPage } = require("../Pages/Login.js");

let logdd;
 Given('User navigates to the adactin web page',async function () {
           // Write code here that turns the phrase above into concrete actions
           logdd=new LoginPage(this.page);
           await logdd.navigate()
           
         });

          When('user enters the invalid {string} and {string} and clicks the login button', async function (userName, Password) {
           // Write code here that turns the phrase above into concrete actions
                 logdd=new LoginPage(this.page);
                  await logdd.login(userName, Password);
                  // await this.page.waitForTimeOut(3000)
         });