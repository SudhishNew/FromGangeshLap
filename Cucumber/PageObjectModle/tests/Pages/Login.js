 export class LoginPage{

    constructor(page){
    this.page=page;
   this.userName= page.locator('[id="username"]');
   this.password=page.locator('[id="password"]');
   this.loginButton=page.locator('#login');

    }

     async  navigate(url){
      await  this.page.goto(url)
    
       }

     async  login(user,pass){
        await this.userName.fill(user);
        await this.password.fill(pass);
        await this.loginButton.click();
        
       }


}