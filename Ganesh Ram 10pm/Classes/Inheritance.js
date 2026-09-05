class Parent{
    land="2 acres"
    bike(){
        console.log("enfield")
    }
    car(){
        console.log("Sumo")
    }
}

class Child extends Parent{
    cycle(){
        console.log("Herculus")
        super.car()
        
    }

}

let c=new Child() //object creation
c.cycle()
c.bike()
