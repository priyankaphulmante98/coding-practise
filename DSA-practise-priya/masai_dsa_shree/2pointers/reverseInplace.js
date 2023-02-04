let arr = [12,32,21,42,12,12,2,3]

function reverseinreplace(arr){
    let l =0,r=arr.length-1
    while(l<r){
     [arr[l],arr[r]]=[arr[r],arr[l]]
     l++
     r--   
    }
    console.log(arr);
}

reverseinreplace(arr)