 
 let pro1=new Promise((resolve,reject)=>{
    reject("task 1")
 })

 let pro2=new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("task 2")
    },1000)
 })
 let pro3=new Promise((resolve,reject)=>{
    resolve("task 3")
 })

 let prom=[pro1,pro2,pro3]
 Promise.race(prom).then((msg)=>{
    console.log(msg)
 }).catch((errmsg)=>{
    console.log(errmsg)
 })

 