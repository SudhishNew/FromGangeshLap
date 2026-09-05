class FaceBook{

    username="JnananiSri"
    password="srinath@123"
    login(){
        console.log(this.username)
        console.log(this.password)
    }

    constructor(){
        console.log("its a constructor")
    }


}

let f=new FaceBook()    //object creation

f.login()
console.log(f.username)






 
