async function prom(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('wait')
            resolve()
        },2000)
    });
   
}

async function print(){
    console.log("ok i will wait for you")
}
 await prom()
 await print()