
class OverLoad{

    meth(){
        console.log('without arg')
    }
    meth(a){
        console.log(a)
    }
    meth(a,b){
        console.log(a+b)
    }
}

let o=new OverLoad()

o.meth(5)