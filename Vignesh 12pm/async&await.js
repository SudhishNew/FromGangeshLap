// console.log(1)
// setTimeout(()=>{
//     console.log(2)
// },2000)
// console.log(3)

// async function fun2(){
// //    return new Promise((resolve)=>{
// //     setTimeout(()=>{
// //     console.log("task 2")
// //     resolve()
// //    },2000) 
// //    })
// // }
function fun1(){
    console.log("task 1")
}
async function fun2(){
    return new Promise((resolve)=>{
            setTimeout(()=>{
        console.log("task 2")
        resolve()
    },2000)
} )}

async function fun3(){
    console.log("task 3")
}
fun1()
await fun2()
 await fun3()