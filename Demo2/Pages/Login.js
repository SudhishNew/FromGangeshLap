const {TIMEOUT} = require ('node:dns')

class LoginPage{

  constructor(page){
    this.page=page
    this.user=page.locator("#username")
    this.password=page.locator("#password")
    this.dd=page.locator('[data-style="btn-info"]')
    this.agree=page.locator('#terms')
    this.submitbtn=page.locator('#signInBtn')


  }

  async navigate(){
    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/')
  }
  async userAndPassword(){
    await this.user.fill('rahulshettyacademy')
    await this.password.fill('Learning@830$3mK2')

  }
  async dropDown(){
    await this.dd.selectOption({label:'Student'})
  }
  async termCheckBox(){
    await this.agree.check()
  }
  async signIn(){
    await this.submitbtn.click()
  }
}

module.exports={LoginPage}