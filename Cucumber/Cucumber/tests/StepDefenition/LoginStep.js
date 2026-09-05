const { Given, When, Then } = require("@cucumber/cucumber");
const {LoginPage}=require("../pages/LogiPage");
const { Search } = require("../pages/SearchHotel");

const Username="Trends06208";
const PassWord="J5TKD6"
let logOBJ;
let searchOBJ;
Given("User navigates to the adaction web page",{timeout:3000}, async function () {

    logOBJ=new LoginPage(this.page);
    await logOBJ.navigate();

});


  When('User Enters the userName And Password and Clicks the login button',async function () { 
    logOBJ=new LoginPage(this.page);    
    await logOBJ.login("Trends06208","J5TKD6")          // Write code here that turns the phrase above into concrete actions
          
     });


      When('User Searches the Hotel and clicks the submit button', async function () {
           // Write code here that turns the phrase above into concrete actions
           searchOBJ=new Search(this.page)
           await searchOBJ.SearchHotel("London",
            "Hotel Hervey",
            "Deluxe",
            "2",
            "05/04/2026",
            "08/04/2026",
            "3",
            "3")
         
      })

       

