//normal
// function show(){
//      console.log('normal function')
// }
// show()

//argument function
// let a=10

// function add(){
//     console.log("add")
// }
// function add(maths,phy,chy){  //=> arguments
//     console.log(maths+phy+chy)

// }
// add(10,25,30)   //stu 1
                 //stu 3

//return
// function fun(a){
//  return a
// }
// console.log(fun("Muniyappan"))  //  =>console.log("Muniyappan")

//  Ananymus 

// let ana=function (){
//     console.log("its an ananymus ")
// }
// ana()

// Immideatly invoked function
 
// (function (){
//     console.log("IIF")
// })
// ()

//Arrow Function

let arw=()=>{  
    console.log("its an Arrow function")

}
// arw()

//closure

let outer=()=>{

    console.log("its an outer")

   inner= ()=>{
    console.log("its an inner function")

    }
    inner()

}
// outer()

//callback

let call=(a)=>{     //a=back()
    console.log("its a call function")
    a()
  

}

let back= ()=>{
    console.log("its a callback function")
}
call(back)






