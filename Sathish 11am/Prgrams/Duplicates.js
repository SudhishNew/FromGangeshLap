 let a=[1,2,1,3,3]
 for(let i=0;i<a.length;i++){      //legth=5 =>i= 0
    for(let j=i+1;j<a.length;j++){  //0=>j=1 ,2 ,3
        if(a[i]==a[j]){
             a[j]=-1
     }
  }
}

// a=[1,2,-1,3,-1]
for(let e of a){
    if (e!=-1){
        console.log(e)
    }
 }
