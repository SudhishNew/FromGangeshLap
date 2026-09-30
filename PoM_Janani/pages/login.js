export class LoginPage{

    constructor(page){
      this.tab=page
      this.user=  page.locator('#user-name')
      this.password=page.locator('#password')
      this.loginBtn=page.locator('#login-button')
    }
    async navigate(url){    // url="https://www.saucedemo.com/
        await this.tab.goto(url)
    }
    async userName(uname){     //uname=standard_user
        await this.user.fill(uname)
    }
    async pwd(psd){              //psd=secret_sauce
        await this.password.fill(psd)   
    }
    async login(){
        await this.loginBtn.click()
    }
}