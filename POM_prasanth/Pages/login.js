export class LoginPage{

    constructor(page){     //page=page(fixture)

        this.page=page
        this.user=page.getByPlaceholder('Username')
        this.pwd=page.getByLabel('Password')
        this.loginBtn=page.getByRole('button', {name:'Login'})

    }


    async navigate(url){

        await this.page.goto(url)
    }

    async userName(uname){
        await this.user.fill(uname)
    }

    async password(pword){
        await this.pwd.fill(pword)
    }

    async login(){
        await this.loginBtn.click()
    }


}