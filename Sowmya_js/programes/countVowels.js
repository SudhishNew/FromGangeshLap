let arr="aeiou"
let a=arr.split('')

let vowel="java"
let vow=vowel.split('')

for(let i=0;i<a.length;i++){   //0=a,1=e,2=i,3=o,4=u,5

            let count=0
    for(let j=0;j<vow.length;j++){  //0=j,1=a,2=v,3=a,4
                                    
        if(a[i]==vow[j]){
            count++      //1,2
             
   }
        
    }
    if(count>0){

        console.log(a[i]+" -"+count);      //a-2,
    }
}



