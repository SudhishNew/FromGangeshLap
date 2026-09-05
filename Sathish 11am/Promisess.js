let pro1=new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve("Task 1")
   })
// resolve("task 1")
})
let pro2=new Promise((resolve,reject)=>{
    reject("Task 2")
})
let pro3=new Promise((resolve,reject)=>{
    resolve("Task 3")
})
const prom=[pro1,pro2,pro3]
Promise.any(prom).catch((err)=>{
    console.log(err)
})