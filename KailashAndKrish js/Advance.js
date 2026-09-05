// Hoisting

// hoist()
// function hoist(){
//     console.log("Its an hoisting");
    
// }

// console.log(a)
// const  a=10;

//closure

function outer(){
    console.log('out')

    function inner(){
        console.log('in')
    }
    inner()
}
// outer()

// callback

function call(CB){   //CB=back()
      console.log('its an call function ')
    CB()

}

function back(){
    console.log('its an back function ')
}
//  call(back)


//setTimeout

function fun1(){
    console.log(1)
}
function fun2(){
setTimeout(()=>{
console.log(2)
},2000)
}

function fun3(){
    console.log(3)
}
fun1()
fun2()
fun3()

