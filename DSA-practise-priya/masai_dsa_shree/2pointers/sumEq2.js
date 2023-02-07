let arr =[4,5,6,7,8,5,3,2,2,1]
let k =13
arr.sort((a,b)=>a-b)  //[1, 2, 2, 3, 4,5, 5, 6, 7, 8]
console.log(arr);
function twopointer(arr){
  let l=0,r=arr.length-1;
  while(l<r){
    let sum = arr[l] + arr[r] ;
    if(sum==k) return true
    else if(sum < k) l++;
    else r--;

  }

  return false
}

console.log(twopointer(arr))