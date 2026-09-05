
//try

try {
    throw new Error("we cannot divide any number by 0")
    console.log(5/0)

}catch(error){

console.log(error.message)
}
finally{
    console.log('Execution over')
}

