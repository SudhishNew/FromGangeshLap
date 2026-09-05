let s='abc123d4g'
let s1='12345'
let a=s.split('')
console.log(a)
let number=0
for(let i=0; i<a.length; i++){

    if(!isNaN(a[i])){   //NaN= Not a number

        number +=Number(a[i])//0+1=1, 1+2=3, 3+3=6, 6+4=10

    }
   
}
console.log(number)
console.log(s+s1)