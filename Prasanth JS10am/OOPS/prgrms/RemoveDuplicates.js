let a='HiHello'
let arr=a.split('') //arr=['H,i,H,e,L,l,o]  ,   [*, i, *, e, *,*,o]
let extractChars=''
let temp='*'
for(let i=0; i<arr.length; i++){

    for (let j=i+1; j<arr.length;j++){

        if(arr[i]==arr[j]){

            arr[i]=temp
            arr[j]=temp
        }
    }
}
for(let k of arr){
    if(k!=temp){
        extractChars+=k
    }
}
console.log(extractChars);
