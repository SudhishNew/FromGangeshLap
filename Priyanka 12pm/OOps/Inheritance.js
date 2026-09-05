class Parent{
    bike='Enfield'
    car='i20'
    property(){
        // car=''
        console.log('Land')
        console.log(this.car)
    }
}

class Child extends Parent{
    twoWheeler=super.bike

    // show(){
    //     console.log(super.bike)
    // }
    
}
let c=new Child();
c.property()
console.log(c.twoWheeler)