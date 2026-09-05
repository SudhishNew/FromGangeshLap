function show1(){
   console.log("first")
}
 async function show2(){
  return  new Promise((resolve)=>{
    setTimeout(()=>{
      console.log("second")
      resolve(" waiting ")
   },2000)
   
  })
 } 

 async function show3(){
   console.log("third")
 } 
 show1()
await  show2().then((msg)=>{
   console.log(msg)
})
await  show3()