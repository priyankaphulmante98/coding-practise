
/*    METHOD 2
Pick the middle number as the pivot.
Set two poiners, left and right, on the start index and end index.
left pointer searches for next number that is bigger or equal to pivot.
right pointer searches for next number that is smaller or equal to pivot.
if there exists two numbers as described, swap them.
6. So on the left part of the left pointer, all numbers are smaller or equal to pivot. For the right part of right pointer, all numbers are bigger or equal to pivot.
keep traversing until left pointer > right pointer, which means all numbers have been visited and set to correct positions.
divide into [start, right], [left, end], quick sort the subarray respectively.

*/

function sortArray(nums){
    if (nums == null || nums.length == 0) {
        return nums;
    }
    
    quickSort(nums, 0, nums.length - 1);
    return nums;
}

function quickSort(nums,start,end) {
    if (start >= end) return;
    
    let left = start, right = end;
    // Ideally, numbers are approximately increasing, which means the middle number is most likey the median number. 
    // The closer pivot is to the median number, the less swapping and recursion we need to do.
    let pivot = nums[left + (right - left) / 2];
    // with (left <= right), we can end with: 
    // 1. x, x, x, right, left, x, x, x,
    // or
    // 2. x, x, x, right, pivot, left, x, x, x
    // easy to divide without boundary issues
    while (left <= right) {
        // if we put nums[left] <= pivot, for array like [2, 1], 1 swap with itself and leads to dead loop
        while (left <= right && nums[left] < pivot) left++;
        while (left <= right && nums[right] > pivot) right--;
        if (left <= right) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    }
    
    quickSort(nums, start, right);
    quickSort(nums, left, end);
}
/*
time complexity:
on average O(nlogn);
array can be divied O(logn) times, each time the whole array will be traversed, O(n) time every traversal .
worst case O(n * n):
[0, 0, 1, 0, 0], if we always choose smallest or biggest number as pivot, then O(n) times traverses with O(n) time every traversal.

space complexity:
on average O(logn), worst case O(n);
decided by the depth of recursion.
*/
//    3333333

// mthod 3
function quickSort(arr){
       if(arr.length <= 1){
            return arr;
        }
        let pivot = arr[arr.length - 1];
        let left = [];
        let right = [];
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] < pivot){
                left.push(arr[i]);
            }else{
                right.push(arr[i]);
            }
        }
        return [...quickSort(left), pivot, ...quickSort(right)];
    }
    
    console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));
