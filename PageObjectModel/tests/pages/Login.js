export class LoginPage{
    constructor(page){
    this.page=page
    this.username= page.locator('#username')
    this.password=page.locator('#password')
    this.dropdown=page.locator('//select[@data-style="btn-info"]')
    this.agree=page.locator('#terms')
    this.signin=page.locator('#signInBtn')
    }

    async navigate(url){
        // await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/')
         await this.page.goto(url+"loginpagePractise/")
     }
     
     async user(uname){  //uname='rahulshettyacademy'
        await this.username.fill(uname)

     }
     async pwd(pw){  //pw='Learning@830$3mK2'
       await this.password.fill(pw)
     }
     async dd(){
       await this.dropdown.selectOption({value:'stud'})
     }
     async temrs(){
       await this.agree.check()
     }
    async signinbtn(){
      await  this.signin.click()
     }
}