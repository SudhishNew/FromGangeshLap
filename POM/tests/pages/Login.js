
export class LoginPage{

    constructor(page){
        this.Page=page
        this.username=page.locator('#username')
        this.password=page.locator('#password')
        this.dropdown=page.locator('[data-style="btn-info"]')
        this.agree=page.locator('#terms')
        this.signin=page.locator('[name="signin"]')

    }

     async navigate(){
     await this.Page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    }
 
    async enterUsernamePassword(user,pword){
        await this.username.fill(user)
        await this.password.fill(pword)

    }
    async  ddselect(){
        await this.dropdown.selectOption({label:'Teacher'})
     }
    async  agreeTerm(){
        await this.agree.check()
     }
    async sign(){
        await this.signin.click()
     }

}