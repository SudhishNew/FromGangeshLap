
const prom1=  new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve('Task 1')
    },2000)
})

 const prom2= new Promise((resolve,reject)=>{
    reject('task 2')
  })


 const prom3= new Promise((resolve,reject)=>{

    setTimeout(()=>{
        reject('task 3')
    },1000)
  })

  const PromArr=[prom1,prom2,prom3]

  Promise.any(PromArr).then((msg)=>{
    console.log(msg)
  }).catch((err)=>{
    console.log(err)

  });
 