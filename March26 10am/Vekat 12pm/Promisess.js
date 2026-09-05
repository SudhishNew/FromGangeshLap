 

 const prom1= new Promise((resolve,reject)=>{
    reject('its 1st one')
})

const prom2=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('its 2nd one')
    },2000)

})

let p=false
const prom3=new Promise((resolve,reject,pending)=>{
    setTimeout(()=>{
        if(p==1){

            resolve('its 3rd one')
        }else if(p==2){ 
            reject('its late')
        }
   
    },1000)
})

const promse=[prom1,prom2,prom3]

Promise.allSettled(promse).then((result)=>{
 console.log(result)
}).catch((error)=>{

console.log(error)
})