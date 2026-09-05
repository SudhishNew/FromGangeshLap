class Parent{

    bike='Enfield'

    car(){
        console.log('i20')
    }

}

class Child extends Parent{
    

    cycle(){
        console.log('its gear cycle')
        // super.car()
       
    }
    
   
}

let c=new Child()
// c.car()
console.log(c.bike)