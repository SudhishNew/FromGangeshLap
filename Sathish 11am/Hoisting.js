//hoisting

// hoist()
// let hoist=()=>{   // arrow function will ot support hoisting
//     console.log("its an hoisting")  
// }
//  function hoist(){
//     console.log("its an hoisting")
//  }

//  console.log(v)
//  const  v=100

 // closure
//  function outer(){
//     console.log("outer function")
//     function inner(){
//         console.log("inner fuction")
//     }
//     inner()
//  }
//  outer()
 //settimeout
//   setTimeout(()=>{
//     console.log("wait")
//   },2000)

//   console.log("dont wait")

  //call back

  let call=(CB)=>{
    console.log("call fuction ")
    CB()
  }
  let back=()=>{
    console.log("call back function")
  }
  
  call(back)

