let a=[1,2,3,4,5]
let b=[6,7,8]
// console.log(a.length)// size
// a.push(6,7,8)
// console.log(a) //to add elements at the end of an array
// a.pop()
// console.log(a)
// a.unshift(0)
// console.log(a)
// a.shift()
// console.log(a)
// console.log(a.slice(1,4))
// a.splice(1,3, 1000)
// console.log(a)
// console.log(a)
// for(let i in a){
//     console.log(i)
// }

// a.sort()
// let a=[1,8,2,10,3,,9,4,5]
// let sm=a.every((e)=>e%3==0)
// console.log(sm)

//map
// let mp=a.map((e)=>e*2)
// console.log(mp)

//filter
// let fltr=a.filter((e)=>e%2==0)
// console.log(fltr)


//reduce
//  let a=[1,2,3,4,5]
let rdc=a.reduce((e,acc)=>acc*=e)
console.log(rdc)
