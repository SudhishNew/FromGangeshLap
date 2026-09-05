class Parent{

    land="5 acres"
    bike=" Royal Enfield"

    car(){
        console.log("BMW")
    }

}

class Child extends Parent{   

   car1(){
    super.car()
   }


}

let c=new Child()
c.car1()