const pro1=new Promise((resolve, reject)=>{
          setTimeout(()=>{
    reject('Step 1')
},3000) 
})
const pro2=new Promise((resolve, reject)=>{
   setTimeout(()=>{
    resolve('Step 2')
},2000) 
    
})
const pro3=new Promise((resolve, reject)=>{
       setTimeout(()=>{
    resolve('Step 3')
},1000) 
})

const Prom=[pro1,pro2,pro3]

Promise.any(Prom).then((msg)=>{
    console.log(msg);
    
}).catch((masg)=>{
    console.log(masg);
    
})