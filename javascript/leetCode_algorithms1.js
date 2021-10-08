// Binary Search
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

/** 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// an array contains numbers in ascending order (nums)
// target is the input number and search the array to find the index #

const search = (nums, target) => {
    // loop: compare target number to each index in nums array
    for (let i = 0; i < nums.length; i++) {
        // console.log(nums[2]);
        // return nums[1]
        if (target === nums[i]) {
            return i
        } else if (target !== nums[i]) {
            return -1
        }
    }
}

// console.log(search([-1,0,3,5,9,12], 5));
// console.log(search([-1,0,3,5,9,12], 9));
// console.log(search([-1,0,3,5,9,12], 0));
// console.log(search([-1,0,3,5,9,12], 1));
// console.log(search([-1,0,3,5,9,12], 4));
// console.log(search([-1,0,3,5,9,12], 2));
console.log(search([-1,0,3,5,9,12], 9));

// for (let i = 0; i < nums.length; i++) {
//     // console.log(i);

//     // conditional: if the target mathes index num, then return index
//     // else return -1
//     if(target === i){
//         console.log(i);
//     } 
// }