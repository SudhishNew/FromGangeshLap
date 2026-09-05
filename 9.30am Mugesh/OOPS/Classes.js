//class
class LoginPage{
    name="facebook"  //property 1
    username(name){
        console.log(this.name)
    }
    username(a){
        console.log(a)
    }

    // password(){
    //     console.log("mugesh@123")
    // }

}
let l=new LoginPage() //object creation
l.username("mugesh@123")
l.username(l.name)
console.log(l.name)