/*
Traverse a 2D Array Ended
Description

You are given a 2D array(matrix), ofNrows andMcolumns.

You need to print elements of array as shown in the diagram, on a single line.

Image




Input
First line contains two integers N and M, no of rows and columns of matrix.

Next N lines contains M space separated integers which are elements of matrix.

Constraints

1 <= N*M <= 10^6

1 <= A[i][j] <= 100


Output
Print all elements of matrix on single line, in the order shown in diagram.


Sample Input 1 

4 3
1 8 9
2 7 10
3 6 11
4 5 12
Sample Output 1

4 3 2 1 5 6 7 8 12 11 10 9
*/




function traverse2dArray(N, M, matrix){
    let bag=''
    for(let i=0; i<M; i++){
        for(let j=N-1;j>=0;j--){
            bag+=matrix[j][i]+" "
            
        }
    }
    console.log(bag)
  
}