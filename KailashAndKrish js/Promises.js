
 const pro1=new Promise((resolve, reject)=>{
   setTimeout(()=>{
    resolve('Step 1')
   },1000) 
})

 const pro2=new Promise((resolve, reject)=>{
    resolve('Step 2')
})

 const pro3=new Promise((resolve, reject)=>{
     setTimeout(()=>{
    resolve('Step 3')
   },3000)
})

const promo=[pro1, pro2, pro3]

Promise.all(promo).then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.log(msg)
})



