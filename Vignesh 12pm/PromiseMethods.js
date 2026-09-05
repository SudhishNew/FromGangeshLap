
let prom1=new Promise((resolve,reject)=>{
    reject("task 1")
})
let prom2=new Promise((resolve,reject)=>{
   setTimeout(()=>{
     resolve("task 2")
   },2000)
// reject("task 2")
})
let prom3=new Promise((resolve,reject)=>{
    resolve("task 3")
})
const pro=[prom1,prom2,prom3]
Promise.any(pro).then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
})