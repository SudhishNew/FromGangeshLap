// var
var a=10; // declaration and assignment
    a=20  // can be reassing
var a=30  //can be  redeclare
// console.log(a)

//let
let b=100
    b=101 //can be reassign or chaging value
// let b=102 // cannot be redeclare
// console.log(b)

//const
const c=1000 
    //   c=1001 // canot be reassign
// const c=1002
// console.log(c)


{
    const v=111
    // console.log(v)
}
// console.log(v)


// 
// console.log(un)
 let n=10
//  n++
//  console.log(++n)

let A=10
let B="10"
// console.log(A===B)


/*
>
>=
<
<=
==
===
*/

// || - OR any one of condition true
// && - AND => both condition are must be true
// let age = 28;
// if(age == 18 && age >= 18){
// console.log("allow");
// }else{
//     console.log("not allow");
// }

// if elseif else
// let age = 28;
// let voter = true;

//     if(age >= 18){ //true
//         console.log("gamming");
//         if(voter){ // if statement are allowing only true
//             console.log("allow voting")
//         }
//     }else{
//         console.log('not allowing');
//     }


// switch statemet
// let num=4
// switch(num-1){
//     case 1:
//         console.log("Task 1")
//         break;
//     case 2:
//         console.log("task 2")
//         break;
//     case 3:
//         console.log("task 3")
//         // break;
//     default :
//         console.log("task default")


// }

// for(let i=1; i<=11;i++){
//     console.log(i);
// }

let j=1
while(j>5){
    console.log(j) //1 2 3 4
    j++

}

// let k=1
// do{
// console.log(k) /1 
// k++
// }while(k>5)

//function
// let name="mugesh"
// function fun(a){

//     return a
// }
// console.log(fun(name))

// let f=function (){
//     console.log("Tejus")
// }
// f()


// (function (){
//     console.log("IIF")
// })
// ()

//Arrow
let arw=()=>{
    console.log("arrow function")
}
arw()

//callback

function great(callback){ //callback=back()
    console.log("hi")
    callback()
}
function back(){
    console.log("callback here")
}
great(back)





