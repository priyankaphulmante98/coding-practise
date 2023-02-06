

// 8) Find is there any sub-array with the given sum [ return True/ False ]  O(N)

let arr = [1,4,20,3,10,5]
let k =33

function subArrSum(arr){
    let sum =0,r=0
  
    for(let i=0;i<arr.length;i++){
        while(sum<k && r<arr.length){
            sum+=arr[r++]
        }
        if(sum==k)return true
        sum-=arr[i]

    }
    return false
}


console.log(subArrSum(arr));  // results will be shown here