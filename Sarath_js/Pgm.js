let a=[1,2,1,4,2,3]

for(let i=0; i<a.length;i++){
    for(let j=i+1; j<a.length;j++){
        if(a[i]==a[j]){
            a[i]=-1
            a[j]=-1
        }
    }
}
for(let k=0;k<a.length;k++){
    if(a[k]!=-1){
        console.log(a[k]);
        
    }
}