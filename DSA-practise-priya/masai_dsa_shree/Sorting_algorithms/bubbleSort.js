function BubbleSort(arr){

let n =  arr.length

    for(let k=0; k <=n-1; k++){

        for(let j=0; j <=n-1-k; j++){

            if(arr[j] > arr[j+1]){
                swap(arr,j,j+1)
            }
        
        }
    }

    console.log(arr)

    function swap(arr,l,r){

        [arr[l],arr[r]] = [arr[r],arr[l]]

    }



}



let arr=[1,2,3,9,8,5,7,4,52,0,-2]

BubbleSort(arr)
