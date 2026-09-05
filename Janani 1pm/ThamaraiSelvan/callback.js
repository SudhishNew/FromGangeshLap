//callback

function call(c){  //c=back()

    console.log("its a call function")
    c()
}

let back=()=>{
    console.log("its a back function ")
}
call(back)