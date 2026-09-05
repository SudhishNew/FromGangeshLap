//method overloading

class Over{
    add(a,b){

        console.log(a+b)
    }

    //override
    add(e,d){
     console.log(e-d)
    }
}
let o=new Over()
o.add(5,10)