// Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you minimize the total number of operations done?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let j=nums.length-1;
    for(let i=0;i<j;){
        if(nums[i]===0){
            for(let k=i;k<j;k++){
                nums[k]=nums[k+1];
            }
            nums[j]=0;
            j--;
        }else{
            i++;
        }
    }
};

// 21 / 21 test cases passed.
// Status: Accepted
// Runtime: 88 ms
// Memory Usage: 40.2 MB


//sample 72 ms submission
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 
 Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
 */
var moveZeroes = function(nums) {
    let counter = 0;
    let i = 0;
    while(i < nums.length) {
        if (nums[i] === 0) {
            nums.splice(i, 1);   
            counter++;
        } else {
            i++
        }
    }
    
      while(counter !== 0) {
        nums.push(0);
        counter--;
    }

    return nums
};


//sample 64 ms submission
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let arr=[];
    let temp=[];
    
    while(nums.length>0) {
        let current=nums.shift();
        if (current!==0) {
            arr.push(current);
        }
        else {
            temp.push(0);            
        }
    }
   nums.push(...arr,...temp);
};