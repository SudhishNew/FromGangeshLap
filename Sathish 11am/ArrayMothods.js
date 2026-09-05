let a=[1,2,3,4,5]
let b=[6,7,8,9]
// let slc=a.slice(1, 4)
// a.splice(1,3,1000) 
let canct=a.concat(b)
console.log(canct)
// let som=a.some((e)=>e%2==1)
// console.log(evrry)
//advance

//map
let mp=a.map((e)=>e*2)
console.log(mp)

//filter
let fltr=a.filter((e)=>e%2==0)
console.log(fltr)

//reduce
// let a=[1,2,3,4,5]
let rdc=a.reduce((e, ac=1)=>e*ac)
console.log(rdc)