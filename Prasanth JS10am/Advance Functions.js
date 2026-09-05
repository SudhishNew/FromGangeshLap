//setTimeout
// console.log(1)

// setTimeout(()=>{
//     console.log(2);
// },2000)

// console.log(3);

// console.log(4);

//hoisting
// fun()
// function fun(){
//     console.log('its an hoisting');
    
// }

//closure

// function outer(){
//     console.log('outer function')
//    function inner(){
//     console.log('inner function');
      
//     }
//     inner()
    
// }
// outer()

//call back

function call(a){  //a=back()
    console.log('its a call function');
    a()
    
}
function back(){
    console.log('its a back function');
    
}
call(back)






