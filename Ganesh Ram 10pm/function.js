// function add(a,b){  //argumented
   
//     console.log(a+b)
// }
// add(10,5)

// //return
// function show(a){
//      return a
// }
// console.log(show("Kalaivani"))

// //ananymus

// let ana=function (){
//     console.log("its a annymus")
// }
// ana()

//immediatly invoked function
// (function (){
//     console.log("IIF")
// })
// ()

//arrow
//  let arw=  ()=>{
//     console.log("its an arrow")
//    }
//    arw()

// let sum=(a,b)=>{
//      return a+b

// }
// console.log(sum(5,10)) //console.log(15)

//hoisting

// hoist()
// function hoist(){
//     console.log("hoisting")
// }

// console.log(a)
// let a=10

// console.log(1)
// setTimeout(()=>{
//     console.log(2)
// },2000)
// console.log(3)

//closure

function outer(){
    console.log("out")
    function inner(){
        console.log("inn")
    }
    inner()
}
outer()

