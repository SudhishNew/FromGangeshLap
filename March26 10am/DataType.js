//primitive

let s='Vijayalakshmi'

let n=100

let b=false

let nul=null

let un

// console.log(a)

//non primitive

//array

let arr=[1,2,3,4,5]
 
// let a[]=new [5]
// a[0]=10
// a[1]=20
// a[2]=30

console.log(arr)

//object

let student={
    'name' : 'Vijayalakshmi',
    'id' : 1,
    'job' :'Tester'

}

student.salary=20000
student.job='Automation tester'
delete student.id
console.log(Object.entries(student))

