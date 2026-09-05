// //function
// function simpleMethod(){
//     console.log("its a normal function")
// }
// simpleMethod()
// console.log("after")

// //return
// function add( a, b){
//     return a+b

// }
// console.log(add(10,5))

// // Ananymous 

// let ana=function ()
// {
//     console.log("its an ananymous")
// }

// ana()

// immideately invoked

// (function (){
//     console.log("IIF ")
// })
// ()

//Arrow function

// let arw=(e)=>{
//     return e

// }
// console.log(arw("its an arrow function"))

//setTimeout

setTimeout(()=>{
    console.log("wait")
},2000)

console.log("dont wait")

//closure
function outer(){
    console.log("Outer function")
    function inner(){
        console.log("inner function")
    }
    inner()
}
 let close=outer()
 console.log(close)







