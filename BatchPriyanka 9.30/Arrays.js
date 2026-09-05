let todayClass=[1,19,23,[45,67],89];
let tmrw=[100,23,45]
console.log(todayClass[4])


console.log(todayClass.length);

//push add in last 

todayClass.push(56)
console.log(todayClass)
//pop remove the last
todayClass.pop()
console.log(todayClass)

//unshift add the element in start of the array

todayClass.unshift(5)
console.log(todayClass)

//shift remove the element in start of the array
todayClass.shift()
console.log(todayClass)


//concat merge two arrays

console.log(todayClass.concat(tmrw))

//indexOf to get the index of an elemet

console.log(todayClass.indexOf(89))

//includes it will check whether the value is present or not

console.log(todayClass.includes(100))
// let todayClass=[1,19,23,[45,67],89];

//slice
console.log(todayClass.slice(1,2))
//splice 
// todayClass.splice(2,3,1000)
// console.log(todayClass)
// let today=[1,45,89,19,2,23];
// console.log(today)

// for(let i=0; i<today.length;i++){
//     console.log(today[i])   //0=1, 1=19 2=23, 3=45, 4=89
// }

//for of

// for( i in today){  // i=1, i=19, i=
//     console.log(i)
// }
// let today=[9,4,1,2,10,1,1]
// const srt=today.sort()
// console.log(srt)
// const som=today.every((i)=>i%2==0)
// console.log(som)

// const fnd=today.find((i)=>i%2==0)
// // console.log(today.indexOf(fnd))
// console.log(fnd)

//map
let today=[9,4,1,2,10,1,1]
// console.log(today.map((i)=>i*2))

//filter
// console.log(today.filter((i)=>i%2==1))

//reduce
console.log(today.reduce((i,temp)=>temp*i,0))
















