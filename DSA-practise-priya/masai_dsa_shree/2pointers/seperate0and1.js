
let arr = [1,0,1,1,0,0,1,1,1,0,0,1,1,0,0]
function seperate(arr){
    
    let l=0,r=arr.length-1
    while(l<r){
        while( arr[l]==0 && l<r ) l++;
        while( arr[r]==1 && l<r )r--
        if(l<r){
            [arr[l],arr[r]]=[arr[r],arr[l]]
        }
    }
    console.log(arr)
}
seperate(arr)