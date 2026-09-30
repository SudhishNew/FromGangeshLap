
export class LoginPage{

    constructor(page){
      this.tab=page
       this.user= page.locator('#user-name')
       this.password=page.locator('#password')
       this.loginBtn=page.locator('#login-button')
    }

   async navigate(url){
     await  this.tab.goto(url)
    }

    async userName(usName){
        await this.user.fill(usName)
    }
    async pwd(password){
        await this.password.fill(password)
    }
    async login(){
        await this.loginBtn.click()
    }

}