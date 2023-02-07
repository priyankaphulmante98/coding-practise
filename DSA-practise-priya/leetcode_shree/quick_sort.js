/* 
912. Sort an Array
Medium
3.2K
602
Companies
Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.
 

Constraints:

1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104
Accepted
353.4K
Submissions
603.2K
Acceptance Rate
58.6%

*/



var sortArray = function(nums,left=0,right=nums.length-1) {


    if(left <right){
        let pind = pivot(nums,left,right);
        sortArray(nums,left,pind-1)
        sortArray(nums,pind+1,right)
    }

    return nums
};

function pivot(nums,left,right){
    let p =right;
    let j = left;
    let i = left-1;
    while(j<=p){
        if(nums[j]<nums[p]){
            i++;
            [nums[i],nums[j]] =  [nums[j],nums[i]]
            j++
        }else j++

    }
    i++
    [nums[i],nums[p]] =  [nums[p],nums[i]]
    return i
}



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

