
const {test,expect} = require('@playwright/test')
class LoginPage{

    constructor(page){
        this.page=page

        this.username=page.locator('#username')
        this.password=page.locator('#password')
        this.radio=page.locator('[value="admin"]')
        this.dd=page.locator('[data-style="btn-info"]')
        this.checkBox=page.locator('#terms')
        this.signin=page.locator('#signInBtn')
    }

    async navigate(ur){
        await this.page.goto(ur)
    }

    async uName(u){
        await this.username.fill(u)
    }

    async pwd(p){
        await this.password.fill(p)
    }

    async radioBtn(){

        // this.page.on('dialog', async alert=>{
        //     await alert.accept()
        // })

        await this.radio.check()
    }

    async dropDown(){
        await this.dd.selectOption({value:'teach'})
    }

    async checkTerms(){
        await this.checkBox.check()

    }

    async signInBtn(){
        await this.signin.click()
    }

    async pageValidate(){
         await expect(this.page).toHaveURL('https://rahulshettyacademy.com/angularpractice/shop')
    }
}

module.exports= LoginPage