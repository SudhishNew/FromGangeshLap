let a=[1,2,3,4]
let b=[6,7,8]
// console.log(a.length)


// for(let i=0; i<a.length;i++){
//     console.log(a[i])
// }

// for(let i in a){
//     console.log(i)
// }
// let srt=a.sort()
 let evry=a.some((e)=>e%2==0)
console.log(evry)

// map
 
// let a=[1,2,6,3,7,4,5,3]
let mp=a.map((e)=>e+2)
console.log(mp)

//filter

let fltr=a.filter((e)=>e%2==0)
console.log(fltr)

//reduce

// let a=[1,2,6,3,7,4,5,3]
let rdc=a.reduce((e,ac)=>e*ac,1)

console.log(rdc)