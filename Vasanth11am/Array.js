let a=[1,2,3,4,1,2,5]
let b=[6,7,8]

a.push(6)
a.pop()
a.unshift(0)
a.shift()
// a.splice(2,4,1000)

//map
// let mp=a.map((e)=>e*2)

//filter
let flt=a.filter((e)=>e%2!=0)

//reduce
// let a=[1,2,3,4,1,2,5]

let rdc=a.reduce((e,acc)=>acc+e,0)


console.log(rdc)