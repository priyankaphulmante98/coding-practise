function SelectionSort(arr){

    let n =  arr.length
    
        for(let k=0; k <=n-1; k++){
            let min = k;
            for(let j=k+1; j <=n; j++){
    
                if(arr[min] > arr[j]){
                    min = j
                }
                
            }
            swap(arr,min,k)
        }
    
        console.log(arr)
    
        function swap(arr,l,r){
    
            [arr[l],arr[r]] = [arr[r],arr[l]]
    
        }
    
    
    
    }
    
    
    
    let arr=[1,2,3,9,8,5,7,4,52,0,-2]
    
    SelectionSort(arr)