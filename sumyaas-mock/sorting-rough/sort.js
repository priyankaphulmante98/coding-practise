let arr = [1,2,3,4,5,6]

    let arr2=[]
    let arr3 =[]
let sort="asc";
    for(let q=0; q<arr.length ; q++){
        if(arr[q]%2==0){
            arr3.push(arr[q])
        }else{
            
            // console.log(arr[p]);
            arr2.push(arr[q])
       
        }
     }  
      // console.log(arr3);
   

    // console.log(arr2)

    if(sort=="asc"){
        console.log(arr3,"asc")
    }else{
        console.log(arr2,"desc")
    }


 

   

