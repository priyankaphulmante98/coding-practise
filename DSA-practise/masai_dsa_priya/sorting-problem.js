// 1] bubble sort 

// What is bubble sort with example?
// Bubble sort is a type of sorting algorithm you can use to arrange a set of values in ascending order.
//  If you want, you can also implement bubble sort to sort the values in descending order.
//   A real-world example of a bubble sort algorithm is how the contact list on your phone is sorted in 
//   alphabetical order

function solve(N,arr){
    let bag="";
    for(let p=0; p<N; p++){
        for(let q=0; q<N; q++){
            if(arr[q]>arr[q+1]){
                temp=arr[q];
                arr[q]=arr[q+1];
                arr[q+1]=arr[p];
                arr[p]=temp;
            }
        }
    }console.log(arr.join(" "));
}

// 2] selection sort 

// Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion of the list and swaps it with the first element of the unsorted portion.

function solve(N,arr){
    for(let p=0; p<N; p++){
        let min = p;
        for(let q=p+1; q<N; q++){
             if(arr[q]<arr[min]){
                 min=q;
             }
        }
        swap(arr, p, min)
    }
    function swap(arr, p, q){
        temp = arr[p]
        arr[p]=arr[q]
        arr[q]=temp
    }
    
    console.log(arr.join(" "));
   
}

// 3] quick sort 

// Which algorithm is quick sort?
// Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. For this reason, it is sometimes called partition-exchange sort.

// What is quick sort in stack?
// Quicksort: Quick sort is an Divide Conquer algorithm and the fastest sorting algorithm. In quick sort, it creates two empty arrays to hold elements less than the pivot element and the element greater than the pivot element and then recursively sort the sub-arrays.

function runProgram(input){
    input= input.trim().split("\n");
    let N=+input[0];
    let arr=input[1].trim().split(" ").map(Number);
    let index=0;
    quicksort(N, arr, index);
    console.log(arr.join(" "))
}
function quicksort(N, arr, index){
   if(index==N){
       return ;
   }else{
       for(let p=0; p<N; p++){
           if(arr[p]>arr[p+1]){
               temp = arr[p]
               arr[p]=arr[p+1];
               arr[p+1]=temp;
           }
       }
       quicksort(N, arr, index+1)
   }
}

// 4] Merge sort 


//5] two sorted arrays 

function runProgram(input) {
    input=input.trim().split("\n");
      var tc= +input[0];
      var line=1;
      for(var p=0; p<tc; p++){
          var n= +input[line++];
          var arr=input[line++].trim().split(" ").map(Number);
          var arr1=input[line++].trim().split(" ").map(Number);
          TwoSortedarray(n, arr, arr1);
    }
}
function TwoSortedarray(n, arr, arr1){
     var l=0;
      var count=0;
      var r=n-1;
      while(l<n && r>=0){
          if(arr[l]===arr1[r]){
              count++;
              l++;
              r--;
          }
          if(arr[l]>arr1[r]){
              r--;
          }
          if(arr[l]<arr1[r]){
              l++;
          }
      }
      console.log(count);
}
  