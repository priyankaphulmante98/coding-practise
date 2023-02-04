// Given input Array, Find the maximum sum of all subarays of size k

let arr = [1,2,43,32,12,1,2,3,54,3]
let k=4;
function maxSumofsizek(arr){
    let max=-Infinity,sum=0;
    for(let i=0;i<k;i++){
        sum+=arr[i]
    }
    max =Math.max(sum,max)
    for(let i=k;i<arr.length;i++){
        sum-=arr[i-k]
        sum+=arr[i]
        if(sum>max){
            max=sum
        }
    }
    console.log(max);
}
maxSumofsizek(arr)