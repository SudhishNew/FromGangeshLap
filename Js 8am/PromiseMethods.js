const pro1=new Promise((resolve, reject)=>{
 setTimeout(()=>{
     resolve("task 1")
},3000)
})

const pro2=new Promise((resolve, reject)=>{
setTimeout(()=>{
     resolve("task 2")
},2000)

})


const pro3=new Promise((resolve, reject)=>{
 resolve("task 3")
})

const prom=[pro1,pro2,pro3]

Promise.all(prom).then((msg)=>{
    console.log(msg)
}).catch((neg)=>{
console.log(neg)
})

