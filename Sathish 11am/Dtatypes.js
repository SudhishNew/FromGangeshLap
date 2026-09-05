//primitive

// let a
// // console.log(b)
// console.log("hi")

//non primitive
//array

let b=[1,2,3,4,5]

// console.log(b[2])

//object

// let emp={
//     'name' : "Vasanth",
//     "age"  :  28,
//     "dept" :  "IT",
//     "Salary": 20000

// }

// emp.id=10   //id creation or add
// emp.age=29  // modify
// delete emp.dept  //deleted dept

// console.log('Obj Keys:',Object.keys(emp))
// console.log('Obj Values:',Object.entries(emp))

let student={
    'name ' : 'Manish',
    'id'    : 10,
    'dept'  : 'IT',
    "clg"  :  'Arunai'
}
student.address='chennai Aanna nagar'
student.address='vellore'
delete student.id
// console.log(Object.entries(student))
console.table(student)
console.table(b)
console.clear()