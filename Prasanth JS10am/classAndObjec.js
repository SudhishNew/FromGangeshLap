
class SauceLabLogin{

    userName="standard_user"
    password="secret_sauce"

    login(){
        
        console.log("user click the login btn");
        
    }

    constructor(){
        console.log(this.userName);
        console.log(this.password); 
    }

}

let s= new  SauceLabLogin()   //object creation 
s.login()




