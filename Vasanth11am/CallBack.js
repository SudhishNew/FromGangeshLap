//callback

function cB(call){
    console.log("cb Function")
    call()

}

function back(){
    console.log("its a callback")
}
cB(back)