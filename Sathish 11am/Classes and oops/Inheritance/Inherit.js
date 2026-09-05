class Grandfather{
    property="3 acres"
}

class Parent extends Grandfather {
     veihcle="fancino"
     bankBalance(){
        console.log("3L")
     }

}

class Child extends Parent {
    bike="deo"
}


let c=new Child() //object creation 
c.bankBalance()
console.log(c.veihcle)
