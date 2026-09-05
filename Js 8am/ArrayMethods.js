// let a=[1,2,3,4,5,5,6,9]  

// let lengt=a.length
// console.log(lengt)
// console.log(a.indexOf(5))
// a.push(6,7,8)   //added the elements to end of an array
// console.log(a)
// a.pop(1)      //delate element from end of array
// console.log(a) 
// a.unshift(0)   //adds one element at front of ana array
// console.log(a)

// let a=[1,2,3,4,5,5] 
// a.shift()
//  console.log(a)
// console.log(a.slice(1,3))  
// a.splice(1,3, 1000)  
// console.log(a)
//  console.log(a)
// for(let i of a){
//     console.log(i)
// }
// let a=[1,2,3,4,5,5] 
// for(let i=0; i<a.length;i++){
//     console.log(a[i]) //1 2 3 4 5
// }

// let a=[1,2,3,4,5,] 
let b=[6,7,8]
// for(let i in  a){
//     console.log(i)
// }
//  console.log(a.concat(b))
// console.log(a.includes(5))
// let a=[1,2,3,4,5,6,9]  

// let som=a.every((i)=>i%3==0)
// console.log(som)

// let o="Javascript"   

//  let revers=""

// for(let i=o.length-1; i>=0;i--){
//     // console.log(o[i]) //1 2 3 4 5
//     revers+=o[i]   //revers=tpircsavaj
//                                   //let a=10
//                                   //let b=5
//                                   //a+=b
// }
// console.log(revers)
let a=[1,2,3,4,5]

// advncd methods
let mp=a.map((i)=>i*2)
// console.log(mp)  //2 4 6 8 10

//filter
let flt=a.filter((i)=>i%4==0)              //factorial 5  
// console.log(flt)

//reduce  
// let a=[1,2,3,4,5]

let rdc=a.reduce((i,acc=0)=>acc+i)
// console.log(rdc)


setInterval(() => {
    console.log("Hello");
}, 1000);








