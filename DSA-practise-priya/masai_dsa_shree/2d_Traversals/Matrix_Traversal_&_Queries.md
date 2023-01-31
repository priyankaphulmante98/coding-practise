Matrix Traversal & Queries Ended
Description

You are given a matrix of size n x m , and two types of queries are to be performed on this matrix. The two types of queries are

q = 1, for this type of query, the matrix is to be traversed, as shown in Fig. 1

q = 2, for this type of query, the matrix is to be traversed as shown in Fig. 2

Image

Screenshot (55).png


Input
The first line of input contains T, the number of test case. The first line of each test case contains n, m and q, as declared in the problem statement.

Next n lines contain space separated integers, denoting the values of the matrix.

Constraints

1 <= T <= 10

1 <= N,M <= 500

1 <= A[i][j] <= 1000


Output
Print n x m space separated integers, denoting the elements of the matrix, on a new line.


Sample Input 1 

2
3 3 1
1 2 3
4 5 6
7 8 9
3 3 2
1 2 3
4 5 6
7 8 9
Sample Output 1

1 2 3 6 5 4 7 8 9 
3 2 1 4 5 6 9 8 7 










function MatrixTRav(row,col,mat,q){
   
    N=row
    M=col
    a=""
    b=""
    if(q==1)
    {
        for(i=0;i<N;i++)
        {
            for(j=0;j<M;j++){
                
                 if(i%2==0 )
                {
                    a= a + mat[i][j]+" ";
                }
                else
                {
                    a=a+ mat[i][M-1-j]+" "
                }
            }
        }
         console.log(a)
    }
   
    
    else if(q==2)
    {
        for(i=0;i<N;i++)
        {
            for(j=0;j<M;j++){
                
                 if(i%2==1)
                {
                    b= b + mat[i][j]+" ";
                    
                }
                else
                {
                    b=b+ mat[i][M-1-j]+" "
                }
            }
           
       }
        console.log(b)
    }
   
}

function runProgram(input) {
input= input.trim().split("\n");
    tc=+input[0]
    var line=1;
    for(var i=0;i<tc;i++)
    {
        var [r,c,q]  = input[line++].trim().split(" ").map(Number);
        var arr=[];
        for(var j=0;j<r;j++)
        {
            arr.push(input[line++].trim().split(" ").map(Number))
        }
        MatrixTRav(r,c,arr,q)
       // console.log(q)
    }
  
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