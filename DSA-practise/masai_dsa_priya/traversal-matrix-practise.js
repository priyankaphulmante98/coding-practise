//1] Reverse Array Traversal==>

function reverseArrayTraversal(n, arr){
    let bag="";
    for(let p=n-1; p>=0; p--){
        bag+=arr[p]+" ";
    }
    console.log(bag);
}

//approach 2==> 

function reverseArrayTraversal(n, arr){
    console.log(arr.reverse().join(" "))
}

//2] N traversal  ==>

function nTraversal(matrix) {
let bag="";

for(let p=matrix.length-1; p>=0; p--){
    bag=bag+matrix[p][0]+" ";
}

for(let p=1; p<matrix.length; p++){
    bag=bag+matrix[p][p]+" ";
}
for(let p=matrix.length-2; p>=0;p--){
    bag=bag+matrix[p][matrix.length-1]+" ";

}
console.log(bag);
}

//3] Reverse N Traversal ==>

function nTraversal(matrix) {
     let bag="";
    for(let p=0; p<matrix.length; p++){
        bag+=matrix[p][0]+" ";
    }
    for(let p=matrix.length-2, q=1; p>=0, q<matrix.length; p--, q++){
        bag+=matrix[p][q]+" ";
    }
    for(let p=1; p<matrix.length; p++){
        bag+=matrix[p][matrix.length-1]+" ";
    }
    console.log(bag);
 
}

//4] Z Traversal ==>

function zTraversal(N,arr){
  let bag="";
  for(let p=0; p<arr.length; p++){
      bag+=arr[0][p]+" ";
  }
  
  for(let p=1, q=arr.length-2; p<arr.length, q>=0; p++,q--){
      bag+=arr[p][q]+" ";
  }
  
  for(let p=1; p<arr.length; p++){
      bag+=arr[arr.length-1][p]+" ";
  }
  console.log(bag);
}


//5] Matrix Traversal & Queries ==>

// Approach 1 ==>

function masaiTraversalAndQueries(N, M, q, arr){
    let bag="";
    if(q==1){
        for(let p=0; p<N; p++){
            if(p%2==0){
                bag=bag+arr[p].join(" ")+" ";
            }else{
                bag=bag+arr[p].reverse().join(" ")+" ";
            }
        }
    }else{
        for(let p=0; p<N; p++){
            if(p%2==1){
                bag=bag+arr[p].join(" ")+" ";
            }else{
                bag=bag+arr[p].reverse().join(" ")+" ";
            }
        }
    }
    console.log(bag);
}


//6] Circular Traversal ==> 

//Approach 1 ==>

function runProgram(input){
   input=input.trim().split("\n");
   let tc=+input[0];
   let line=1;
   for(let p=0; p<tc; p++){
       let n=+input[line++];
       let mat=[];
       for(let q=0; q<n; q++){
         mat.push(input[line++].trim().split(" ").map(Number))
       }
       circular(mat,n)
   }
    // console.log(input);
}
function circular(mat, n){
    let bag="";
    
    for(let p=n-1; p>=0; p--){
        bag+=mat[p][0]+" ";
    }
    
    for(let p=1; p<n; p++){
        bag+=mat[0][p]+" ";
    }
    
    for(let p=1; p<n; p++){
        bag+=mat[p][mat.length-1]+" ";
    }
    
    for(let p=n-2; p>=1; p--){
        bag+=mat[n-1][p]+" ";
    }
    console.log(bag);
    
}

//Approach 2 ==>

function runProgram(input) {
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let p=0; p<tc; p++){
        let n= +input[line++];
        let mat=[];
        for(let q=0; q<n; q++){
            mat.push(input[line++].trim().split(" ").map(Number));
        }
          circular(n,mat)
    }
    // console.log(input)
}
function circular(n,mat){
    let bag="";
    let left=0;
    let right=n-1;
    let bottom=n-1;
    let top=0;
    
    for(let p=bottom; p>=top; p--){
        bag+=mat[p][left]+" ";
    }
   left++;
    
    for(let p=left; p<=right; p++){
        bag+=mat[top][p]+" ";
    }
    top--;
    
    for(let p=1; p<=bottom; p++){
        bag+=mat[p][right]+" ";
    }
   
   right--;
   
   for(let p=right; p>=left; p--){
       bag+=mat[bottom][p]+" ";
   }
   bottom++;
   console.log(bag);
}




//7] Spiral Traversal (Rectangular Matrix) ==>

 //Approach 1 ==> 

function spiralTraversal(N, M, arr){
  let bag="";
  
  for(let p=0; p<N; p++){
      bag+=arr[p][0]+" ";
  }
  
  for(let p=1; p<M; p++){
      bag+=arr[N-1][p]+" ";
  }
  

for(let p=N-2; p>=0; p--){
    bag+=arr[p][M-1]+" ";
}

for(let p=M-2; p>0; p--){
    bag+=arr[0][p]+" ";
}
for(let p=1; p<=M-2; p++){
    bag+=arr[N-2][p]+" ";
}
console.log(bag);
}

//Approach 2 ==> 

function spiralTraversal(N, M, arr){
    let top = 0 , btm = N-1, left = 0, right = M-1;
    let bag='',count=0
    
    while(count<N*M){
        // elements of left most column
    for(let i=top ; i<=btm &&count<N*M ; i++){
        bag+= arr[i][left]+" ";
        count++
        
    }
    left++;
    
    // travels through bottom row
    for(let i=left ; i<=right &&count<N*M  ; i++){
        bag+= arr[btm][i]+" "
        count++
    }
    btm--;
    
    // right most column
    for(let i=btm ; i>=top&&count<N*M  ; i--){
        bag+= arr[i][right]+" "
        count++
    }
    right--
    
    // top most row
    for(let i=right ; i>=left &&count<N*M ; i--){
        bag+= arr[top][i]+" ";
        count++
    }top++
}    
    console.log(bag)
}
//8] Transpose the Matrix ==> 

function transposeTheMatrix(N, M, matrix){
 for(let col=0; col<M; col++){
     let bag="";
     for(let row=0; row<N; row++){
         bag=bag+matrix[row][col]+" ";
     }
     console.log(bag);
 }
 
}


//9] Diamond Traversal ==> 

//10] Conditional Matrix Sum ==>







