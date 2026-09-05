// function show(){  // normal 
//     console.log("normal function")
// }
// show()

// let a
// let b
// function add(a,b){  // argumented
//     console.log(a+b)
// }
// add(10,20)

// //return

// function fun(a){
//     return a

// }
// console.log(fun("poovarasan"))

// //ananymus

// let ana=function(){
//     console.log("its an ananymus")
// }
// ana()

//immediate invoked 
// (function (){
//     console.log("IIF")
// })
// ()

//arrow
 
// let arw=()=>{
//     console.log("its an arrow")
// }
// arw()

//hoisting
// hoist()
// function hoist(){
//     console.log('its an hoisting')
// }

// console.log(a)
// const a=10

console.log(1)
setTimeout(()=>{
    console.log(2)
},2000)
console.log(3)

//closure
function out(){
    console.log("outer")
    function inner() {
        console.log("inner")
        
    }
    inner()
   
}
out()

