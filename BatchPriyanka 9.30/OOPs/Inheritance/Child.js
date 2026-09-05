import Dad from "./Parent.js"

class Son extends Dad {
    properties="edhuvum illa"
    // dadsProperty=super.property()
    show(){
        console.log(this.properties)
        super.property()
    }
}
 
let s=new Son()
s.property()
s.show()
// s.dadsProperty()
