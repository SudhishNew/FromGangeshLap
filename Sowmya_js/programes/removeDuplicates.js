let arr='malayalam'
let a=arr.split('')
let dup=""
for(let i=0;i<a.length;i++){    //j,a

    for(let j=i+1;j<a.length;j++){  //a,v,a

        if(a[i]==a[j]){

            a[j]='*'
            
      }
    }
}
console.log(a);
for(let d of a){
    if(d!='*'){
 dup+=d
    }
  
}
console.log(dup);





java
jav
ja
j
