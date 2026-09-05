let arr=[1,2,7,6,3,4,5]
let b=[6,7,8]
let len=arr.length  //size
// arr.push(6,7)
// arr.pop(4)
// arr.unshift(0)
// arr.shift()
// arr.splice(2, 3,1000)
// console.log(arr)
// for(let i=0; i<arr.length;i++){
//     console.log(arr[i]) //0=1, 1=2
// }
// for(let i in arr){
//     console.log(i)
// }
// let arr=[1,2,7,6,0,3,4,5]
// let som=arr.every((e)=>e%2==0)
// console.log(som)

// // map
//  let mp=arr.map((e)=>e*2)
// //  console.log(mp)

//  //filter
// let fltr= arr.filter((e)=>e%2==1)
// // console.log(fltr)
 
// //reduce
// // let arr=[1,2,7,6,3,4,5]
// let rdc=arr.reduce((e,acc=1)=>e*acc)
// console.log(rdc)


// let arr=[1,2,7,6,3,4,5]
//map
let mp=arr.map((e)=>e*2) //2, 4, 14
console.log(mp)

//filter
let fltr=arr.filter((e)=>e%3==0)
console.log(fltr)

//reduce
// let arr=[1,2,7,6,3,4,5]
let rdc=arr.reduce((e,acc)=>e*acc)
console.log(rdc)