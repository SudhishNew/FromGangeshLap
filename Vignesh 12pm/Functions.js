//function

// function fun(){
//     console.log("its a normal function")
// }
// //  fun()   //calling of function

// //argumented 

// function add(a,b){
//     console.log(a+b)
// }
// add(5,10)

//return

// function ret(a){
//     return a
// }
 
// console.log(ret('vignesh'))

//ananymus

// let ana=function (){
//     console.log('its an ananymus')
// }
//  ana()

//immediately invoked
// (function (){
//     console.log("IIF")
// })
// ()

//arrow

let arw=()=>{
    console.log('its an arrow ')
}
arw()

//closure

function outer(){
    console.log("out function")
   function  inner(){
        console.log("inner function")
    }
    inner()
}
outer()

//hoisting

hoist()
function hoist(){
    console.log("its an hoisting")
}

console.log(a)
const a=10
