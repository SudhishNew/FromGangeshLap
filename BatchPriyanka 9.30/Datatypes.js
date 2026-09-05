//primitive
let str="Sri9765@##$nath" 
let num=12345.3456
let boo=true
let n=null
let un
// console.log(a)
// console.log("hello")
// console.log(typeof(n))

//non-primitive
//1.array
let a=[1,2,3,5]
// console.log(a[1][0])

//2.object

let Student={
    name: "Srinath",
    id: 10,
    marks:{
        eng: 75,
        Tam: 80,
        maths: 60
    }
}
//add a field
Student.dept="IT"
//update a field
Student.marks.eng=80
//delete a field
delete Student.marks.maths
console.log(Object.entries(Student))


