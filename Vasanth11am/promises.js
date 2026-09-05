
const prom1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Fail")
    },2000)

})

const prom2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Sucess")
    },1000)
})

const prom3 = new Promise((resolve,reject)=>{
    reject("failure")
})

const prom=[prom1, prom2,prom3]

Promise.race(prom).then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
})