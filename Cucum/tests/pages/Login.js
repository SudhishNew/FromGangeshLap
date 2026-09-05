const {TIMEOUT} = require ('node:dns')

class LoginPage{
    constructor(page){
        this.page=page
        this.user=page.locator('#username')
        this.password=page.locator('#password')
        this.dd=page.locator('//select[@data-style="btn-info"]')
        this.agree=page.locator('#terms')
        this.signin=page.locator('#signInBtn')

        
    }

    async navigate(){
        await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/')
        

    }
    async userAndPassword(){
        await this.user.fill('rahulshettyacademy')
        await this.password.fill('Learning@830$3mK2')
        }

        async dropdown(){
       await this.dd.selectOption({value:'stud'})
     }
     async temrs(){
       await this.agree.check()
     }
    async signinbtn(){
      await  this.signin.click()
     }
    
}
module.exports={LoginPage}