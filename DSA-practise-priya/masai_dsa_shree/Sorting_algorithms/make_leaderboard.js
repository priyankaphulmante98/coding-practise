/*
Make Leaderboard Ended
Description

You are given name and marks of N different students in a hackerrank contest. Your task is to write a program that makes leaderboard of the students under following conditions:

- If two students get same marks they get same rank

- The student placed next to the same marks students will get the rank skipping the intermediate ranks.

Refer to the sample test case for better understanding

Note : You cannot use built-in sort function. Using that can lead to disqualification. Write your own sorting algorithm


Input
Input Format :
First line of input contains N

Next N line contains name and marks respectively of N different students (where name and marks is separated by a space)



Constraints :

N < 100


Output
Output N names with their rank. Follow these rules for generating the list:

1. The students having more mark gets better rank

2. If students have similar mark, their rank will be same(In case of similar marks, the person whose name comes first in alphabetical order comes first in order. However their rank will be same)

3. The student placed next to the same marks students will get the rank skipping the intermediate ranks.


Sample Input 1 

6
rancho 45
chatur 32
raju 30
farhan 28
virus 32
joy 45
Sample Output 1

1 joy
1 rancho
3 chatur
3 virus
5 raju
6 farhan
*/

function runProgram(input) {
    input = input.trim().split("\n");
    
    let n = +input[0];
  let line=1;
    let names = []
    let mrks = []
    for(let i=0;i<n;i++){
        let [name,mrk]=input[line++].trim().split(" ")
        names.push(name)
        mrks.push(+mrk)
    }
    Leaderboard(names,mrks)
    
    
  }
  
  function   Leaderboard(names,mrks){
      let n=mrks.length;
      for(let i=0;i<n;i++){
          
          for(let j=0;j<n-i-1;j++){
              if(names[j]>names[j+1]){
                  swap(names,j,j+1)
                  swap(mrks,j,j+1)
              }
              if(mrks[j]<mrks[j+1]){
                  swap(names,j,j+1)
                  swap(mrks,j,j+1)
              }
          }
          
          
      }
  
      function swap(arr,i,j){
          [arr[i],arr[j]] =[arr[j],arr[i]]
      }
      
      let rank=1,prev=1;
      let count =0;
      for(let i=0;i<n;i++){
          if(mrks[i]==prev){
              console.log(rank,names[i])
          }
          else{
              rank+=count;
              console.log(rank,names[i])
              count=0;
          }
          prev=mrks[i];
          count++
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
  