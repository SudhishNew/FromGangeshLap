//promise
let salary=false
function que(){
    return new Promise((resolve, reject)=>{
      if(salary==true){
        resolve("yes i got a salary")
      }else{
        reject("no didnt got a salary")
      }
    })
}
que().then((msg)=>{
    console.log(msg)
}).catch((errmsg)=>{
    console.log(errmsg)
})