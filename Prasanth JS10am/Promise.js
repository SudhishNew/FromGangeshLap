//promise

function que(){
    return new Promise((resolve, reject)=>{
        reject('ticket is over')
    })
}
que().then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.log(msg);
    
})

