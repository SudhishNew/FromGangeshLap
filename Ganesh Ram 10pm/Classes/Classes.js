class LoginPage{
    name="facebook"
    mail(){
        console.log("kalai123@gmail.com")
        console.log(this.name)
    }
    password(){
        console.log("kalai@123")
    }

    constructor(){
        console.log("contructor function")
    }
}

let l=new LoginPage()  //object creation 
l.mail()
l.password()
console.log(l.name)