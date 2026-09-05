let arr=[1,2,1,2,3]

for(let i=0; i<arr.length;i++){  //arr[0]=1  , arr[1]=2  , arr[2]=1 , arr[3]=2
                                    
  for(let j=i+1; j<arr.length;j++){ //i=0=> j=1=>  arr[1]=2  
                                    //i=0=>  j=2 =>arr[2]=1
                                    //i=0=> j=3 =>arr[3]=2
                                    //i=0 => j=4 => arr[4]=3

                                    //i=1 => j=2 => arr[2]=1
                                    //i=1 => j=3=> arr[3]=2
                                    //i=1 => j=4=> arr[4]=3

                                     //i=2 => j=3=> arr[3]=2
                                    //i=2 => j=4=> arr[4]=3
         
        if(arr[i]==arr[j]){         //i=3 => j=4=> arr[4]=3

        console.log(arr[i]) // 1,2
    }

  }

}