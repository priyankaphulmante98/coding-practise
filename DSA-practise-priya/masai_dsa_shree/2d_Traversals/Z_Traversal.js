
/*
Z Traversal Ended
Description

Given a square matrix of size N x N. Print the Z traversal of the matrix. Refer the figure given below for better understanding.

Image


Input
The first line of the input contains T, the number of test cases. The first line of each test case contains N, the dimension of the square matrix.

Next N lines contains N space separated integers, denoting the values of the matrix.

Constraints

1 <= T <= 10

1 <= N <= 500

1 <= A[i][j] <= 1000


Output
For each test case, print the elements that occur in the Z traversal of the matrix, on a new line.


Sample Input 1 

1
3
1 2 3
4 5 6
7 8 9
Sample Output 1

1 2 3 5 7 8 9 

*/





function zTraversal(N,matrix){
    //write code here
    
   let t = 0, b=matrix.length-1,l=0,r = matrix[0].length-1,bag=''
   for(let i=l; i<=r; i++){
       bag+=matrix[t][i]+' '
   }t++
   for(let i=r-1,j=t; i>=l&&j<=b; i--,j++){
       bag+=matrix[j][i]+' '
   }l++
   for(let i=l; i<=r; i++){
       bag+=matrix[b][i]+' '
   }
   
   console.log(bag)
    
}
