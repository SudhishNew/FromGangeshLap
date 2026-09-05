class Parent{
    bike="Enfield"
    car(){
        console.log("i20")
        console.log(this.bike)
    }
}

class Child extends Parent{
    twoWheeler="RX100"
    obj=super.bike
    fun(){
        console.log(this.obj)
    }
}
let c=new Child()
c.car()
c.fun()
console.log(c.bike)