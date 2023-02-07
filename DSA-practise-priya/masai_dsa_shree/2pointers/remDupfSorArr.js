let arr =[1,1,1,2,3,4,4,4,5]
function removeDuplicateFromSortedArr(arr){
    let n =arr.length;
    let j=0;
    for(let i=0;i<n-1;i++){
        if(arr[i]!=arr[i+1]){
            arr[j++]=arr[i]
        }
    }
 arr[j]=arr[n-1]
 let bag=''
 for(let i=0;i<=j;i++){
  bag+=arr[i] +" "
 }
 console.log(bag)
}

removeDuplicateFromSortedArr(arr)