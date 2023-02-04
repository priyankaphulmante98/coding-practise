let arr1 = [1,3,5,7,9]
let arr2 = [2,4,6,8,10]

function mergeSort(arr1,arr2){
    let l1=0,r1=arr1.length
    let l2=0,r2=arr2.length 
    let arr=[]
    while(l1<r1 && l2<r2){
        if(arr1[l1]<arr2[l2]){
           arr.push(arr1[l1++])
        }
        else arr.push(arr2[l2++])
    }
    while(l1<r1){
        arr.push(arr1[l1++])
    }
    
    while(l2<r2){
        arr.push(arr2[l2++])
    }
    console.log(arr);
}

mergeSort(arr1,arr2)