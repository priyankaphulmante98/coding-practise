Reverse N Traversal Ended
Description

You are given a matrix of size n x n. Find the ReverseNtraversal of the matrix. Refer the following figure for better understanding.

Image


Input
The first line contains T, the number of test cases. The first line of each test case contains N, the size of the square matrix.

Next N lines contain N space separated integers, denoting the values of the matrix.



Constraints

1 <= T <= 10

1 <= N <= 500

1 <= A[i][j] <= 1000


Output
For each test case, print the N traversal of the matrix on a single line, on a new line.


Sample Input 1 

1
3
1 2 3
4 5 6
7 8 9
Sample Output 1

1 4 7 5 3 6 9 




function nTraversal(matrix) {
  
  let t = 0, b=matrix.length-1,l=0,r = matrix[0].length-1,bag=''
   for(let i=t; i<=b; i++){
       bag+=matrix[i][l]+' '
   }l++
   for(let i=b-1,j=l; i>=t&&j<=r; i--,j++){
       bag+=matrix[i][j]+' '
   }t++
   for(let i=t; i<=b; i++){
       bag+=matrix[i][r]+' '
   }
   
   console.log(bag)
    
}
