//promise

let isTicket=false;
function que(){
    return new Promise((a,b)=>{
        if(isTicket){
            a("I got a ticket")
        }else{
            b(" ticket is over")
        }

    })
}
que().then((mesg)=>{
    console.log(mesg)
}).catch((ere)=>{
    console.log(ere)
});
