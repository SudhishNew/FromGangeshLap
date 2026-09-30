export class LoginPage{

    constructor(page){

        this.page=page

       this.user= page.locator('#user-name')
       this.pwd=page.locator('#password')
       this.logBtn=page.locator('#login-button')

    }

    async navigate(url){
        await this.page.goto(url)
    }

    async login(user,pwd){
        await this.user.fill(user)
        await this.pwd.fill(pwd)
        await this.logBtn.click()
    }
}