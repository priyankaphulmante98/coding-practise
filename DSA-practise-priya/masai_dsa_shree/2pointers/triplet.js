let arr = [4, 5, 6, 7, 8, 5, 3, 2, 2, 1];
let k = 17;
arr.sort((a, b) => a - b); //[1, 2, 2, 3, 4,5, 5, 6, 7, 8]
console.log(arr);
function triplet(arr) {
  for (let i = 0; i < arr.length; i++) {
    let l = i + 1,r = arr.length - 1;
    while (l < r) {
      let sum = arr[i] + arr[l] + arr[r];
      if (sum == k) return [arr[i], arr[l], arr[r]];
      else if (sum < k) l++;
      else r--;
    }
  }
  return [-1, -1, -1];
}

console.log(triplet(arr));
