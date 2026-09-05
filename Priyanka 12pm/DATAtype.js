//primitive
let a=10
let b='Sundeep'
let bln=true
let n=null
let m 
// console.log(h)
console.log(b)

//non -primitive
//array

let a=[1,2,3,4,5]
console.log(a[4])

//object
let stud={
    'name' : 'Sundeep',
    'age'  : 26,
    'dept' :"CSE",
    'year' : 2020
}
stud.year=2021
delete stud.year

console.log(Object.entries(stud))
