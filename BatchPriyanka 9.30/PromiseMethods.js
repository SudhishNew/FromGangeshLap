//promises
 
let pro1= new Promise((resolve,reject)=>{
   setTimeout(()=>{
     reject("Step 1")
   },2000)

})

let pro2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Step 2")
    },4000)

})

let pro3= new Promise((resolve,reject)=>{
    reject("Step 3")

})

const prom=[pro1,pro2,pro3]
Promise.race(prom).then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.log(msg)
})


