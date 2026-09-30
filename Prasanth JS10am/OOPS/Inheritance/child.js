
import {Parent} from "../Inheritance/Parent.js"
class Child extends Parent{

    bike(){
        super.bike()
        
    }

}

let c=new Child()
c.bike()
c.vehicle()
