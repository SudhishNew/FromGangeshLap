import {MyDad} from '../oops Inheritance/parent.js'
class Son extends MyDad {

   
    bikes(){
        console.log('deo and R15')
        super.car()
    }
    
}

let s= new Son()
s.house()
s.bikes()