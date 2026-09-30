 const { Given, When } = require("@cucumber/cucumber");
const { LoginPage } = require("../pages/LogiPage");

let logdd;

Given('User navigates to the adactin web page', async function () {
  logdd = new LoginPage(this.page);
  await logdd.navigate();
});

When('user enters the invalid {string} and {string} and clicks the login button', async function (userName, password) {
  logdd = new LoginPage(this.page);
  await logdd.login(userName, password);
});