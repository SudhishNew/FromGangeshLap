 const prom1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Task 1')
    },1000)
 })

 const prom2=new Promise((resolve,reject)=>{
    reject('task 2')
 })
  
 const prom3=new Promise((resolve,reject)=>{
    resolve('task 3')
 })
const prom= [prom1,prom2,prom3]
Promise.any(prom).then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
})