//Asynchronus

// function fun1(){
//     console.log(1)
// }
// function fun2(){    
// setTimeout(()=>{
//     console.log(2)
// },2000)
// }
// function fun3(){
//     console.log(3)
// }
// fun1()
// fun2()
// fun3()

//Async await
function fun1(){
    console.log(1)
}
 async function fun2(){  
 return new Promise((resolve)=>{
    setTimeout(()=>{
    console.log(2)
    resolve()
},2000)
})  
}
 async function fun3(){
    console.log(3)
}
fun1()
await fun2()
await fun3()


