export class Login{ 
    constructor(tab){    
        this.page=tab   //tab=page --->fixture
       this.user= tab.locator('#username')
       this.pass=tab.locator('#password')
       this.dd=tab.locator('[data-style="btn-info"]')
       this.check=tab.locator('#terms')
       this.sign=tab.locator('#signInBtn')
    }

    async navigate(url){
        await this.page.goto(url)

    }

   async  userAndPassword(user,pass){
    await this.user.fill(user)
    await this.pass.fill(pass)
    }

   async dropDown(){
 await this.dd.selectOption({value:'stud'})
    }

    async agreeBtn(){
        await this.check.check()
    }

    async signIn(){
        await this.sign.click()
    }
}