// function - is pice of block of code to execute with in block, to avoid duplicate of code
// and reuse function
/***
 * syntax
 * ------
 * 
 * function functionName(param1, param2, etc ....)
 * {
 *  // function body
 * 
 * }
 * functionName(10,20)
 * 
 */
//1.Function Declartion
// let user = "Janani"
// // greet(user,45); // function calling
// function greet(a,b,c){ // function declration
//     console.log("Hello Welcome");
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// Types
/**
 * 1.Normal function / function declartion
 * 2.function Expression
 * 3.Arrow function
 * 4.Immediately Invoked function expression (IIFE)
 * 5.Callback Function
 * 6.Anonymous function
 * 
 */

// 2.Function Expression

// function getUser(username, job){
//     const msg = "Hello "+username
//     return msg;
// }
// const result = getUser("Janani")
// console.log(result)

// const value = getUser("Prakash");
// console.log(value);

// // const output = getUser("Sudhish", "Trends");
// // console.log(output);

// // function engCutOff(maths,Phy,chem){
// //     cutOff=(maths+Phy+chem)/3
// //     console.log(cutOff)
// // }
// // engCutOff(73,80,72)    //sudhish
// // engCutOff(95,80,90)    //Janani

// //normal

// function demo(){
//     console.log("hello")
// }
// demo()

// //paramterized 
// function para(a){
//     console.log(a)
// }
// para("hi janani") 

// //return
// function reTen(a){ //a="Hello Janani"
//     return a
// }
// console.log(reTen('Hello Janani'))

// //Anonymus

//    let ano=function (){
//     console.log("its an Anonymus function")
//    }
//    ano()
//First class function or immediately invoked function

// (function (){
//     console.log("its an IIF")
// })
// ()

//arrow function  => short hand syntax to declare a function

// let arw=()=>{
//     console.log("its an arrow")
// }
// arw()

//normal
// function demo(){
//     console.log('Hi janani')
// }
// demo()

//argument

// function sum(a,b){ //a=5, b=10
//     c=a+b
//     console.log(c)

// }
// sum(5,10)

//return

// function show(a){

//     return a

// }
// console.log(show("Hello janani"))

//anonymus

//  let ana=function (){
//     console.log(" its an anonymus")
//  }
//  ana()

 //IIF

//  (function (){
//     console.log('its an IIF')
//  })
//  ()

//Arrow

// let arw=()=>{
//     console.log("its an arrow")
// }
// arw()

//hoisting
// hoist()
var hoist=()=>{
    console.log('its an hoisting')
}

// console.log(hoist)

const host="Hoisting"

//closure

function outer(){
    console.log("out")
     function inner(){
        console.log("in")
     }
     inner()

}
outer()
//




