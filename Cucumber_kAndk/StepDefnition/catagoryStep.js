const {Given,When,And} = require('@cucumber/cucumber')
const  Catagory = require ('../Pages/catogry')

const LoginPage = require ('../Pages/login')


Given('User Should completed the login then navigate into the catagory page', async function () {
  
    let l=new LoginPage(this.page)
    await l.navigate()
    await l.uName()
    await l.pwd()
    await l.radioBtn()
    await l.dropDown()
    await l.checkTerms()
    await l.signInBtn()
    
});

When('User clicks the catagory btn', async function () {

    let c=new Catagory(this.page)
    await c.catagoryBtn()
 
});

When('User Enters the name, email and password',async  function () {
  
    let c=new Catagory(this.page)
    await c.enterName()
    await c.enterMail()
    await c.enterPassword()
});

When('User checks the iceCream checkBox',async  function () {
 
    let c= new Catagory(this.page)
    await c.iceCreanCheckbox()
});

When('User selects the gender',async  function () {
    let c= new Catagory(this.page)
    await c.selectGender()
 
});

When('User selects the empStatus and Submit the form',async function () {
 
    let c= new Catagory(this.page)
    await c.empStatusRadio()
    await c.submit()
});