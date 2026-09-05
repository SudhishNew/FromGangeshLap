class ContOne{
    cont="constructor One"
    constructor(){
        console.log(this.cont)
    }
    show(){
        console.log("Show time")
    }
}
class Construct extends ContOne{
    name="constructor"
    constructor(a,b){
        console.log(this.name)
        console.log(a+b)

    }
    display(){
        super.show()
    } 
}
let con=new Construct(5,10);
con.display()

