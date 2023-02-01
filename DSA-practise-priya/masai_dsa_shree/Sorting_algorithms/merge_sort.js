 // merge sort

 /*
 mergeSort(arr)
 steps
 1. check if array can be split
 2.get middle index
 3.split array in two sides
 4. use recursion to continue splitting



function merge(left right){
    create new array
   find lower value / higher value add it to new array. and also remove the previous element 

   return [spread newarray,spread left array,spread right]

}



 */
  
  
  function mergeSort(arr){




      if(arr.length<=1)return arr
      let mid = Math.floor(arr.length/2)
      let left = mergeSort(arr.slice(0,mid))
      let right = mergeSort(arr.slice(mid))
      return merge(left,right)
  
  }
  function merge(left,right){
      let sortedarr=[];
      while(left.length&&right.length){
          if(left[0]<=right[0]){
              sortedarr.push(left.shift())
          }else{
              sortedarr.push(right.shift())
          }
          
      }
      return [...sortedarr,...left,...right]
  }
  
// input taking

  function runProgram(input) {
    input = input.trim().split("\n");
    let n  = +input[0].trim()
    let arr = input[1].trim().split(" ").map(Number)
    console.log(...mergeSort(arr))
  }
  
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  