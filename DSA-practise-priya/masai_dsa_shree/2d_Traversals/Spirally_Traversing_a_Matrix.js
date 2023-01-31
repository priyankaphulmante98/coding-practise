/*
Spirally Traversing a Matrix Ended
Description

Given a matrix of size n by n. Traverse and print the matrix in spiral form.



Input
Input Format

First-line contains n

The next n lines contain the matrix

Constraints

n <= 1000

Ai <= 10000




Output
Print the matrix in a single line traversing it spirally


Sample Input 1 

4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8
Sample Output 1

1 2 3 4 8 4 8 7 6 5 1 5 6 7 3 2 
*/






function spirallyTraversingAMatrix(N, arr){
    //write code here
     let l = 0, r = N-1, t=0, b = N-1,c=0,bag='',M=N
     
    while(c<N*M){
        
           for(let i=l; i<=r && c<N*M; i++){
            bag+=arr[t][i]+" "
             c++   
            }t++;
        
            for(let i=t; i<=b && c<N*M; i++){
                bag+=arr[i][r]+" "
             c++   
            }r--;
            
            for(let i=r; i>=l && c<N*M; i--){
            bag+=arr[b][i]+" "
             c++   
            }b--
            for(let i=b; i>=t && c<N*M; i--){
                bag+=arr[i][l]+" "
             c++   
            }l++
        
        
        
    }
    console.log(bag)
  
  
}
