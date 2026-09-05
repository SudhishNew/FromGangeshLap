
let arr=[7,4,3,5,1,2]
let brr=[6,7,8]
// for(let i in arr){
//     console.log(i)
// }

// let every=arr.some((e)=> e%2==0) 
// console.log(every)

//map
// let arr=[7,4,3,5,1,0,2]
let mp=arr.map((e)=>e*2)
// console.log(mp)

//filter
// let arr=[7,4,3,5,1,0,2]
let fltr=arr.filter((e)=>e%2==0)
console.log(fltr)

//reduce
// let arr=[7,4,3,5,1,0,2]
let rdc=arr.reduce((e,acc=1)=>acc*e)
console.log(rdc)
