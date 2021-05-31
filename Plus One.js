// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

 

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Example 3:

// Input: digits = [0]
// Output: [1]
 

// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    for(var i=digits.length-1;i>=0;i--){
        if(digits[i]===9){
            digits[i]=0;
        }else{
            digits[i]++;
            break;
        }
    }
    if(i===-1){
        digits.unshift(1);
    }
    return digits;
};  

// //Input
// [1,2,3]
// [4,3,2,1]
// [0]
// [9,9,9,9,9,9,9,9,9,9]
// [5,6,7,8,9,9,9,9,9,9,9,9]

// //Output
// [1,2,4]
// [4,3,2,2]
// [1]
// [1,0,0,0,0,0,0,0,0,0,0]
// [5,6,7,9,0,0,0,0,0,0,0,0]

// 111 / 111 test cases passed.
// Status: Accepted
// Runtime: 68 ms
// Memory Usage: 38.8 MB


// sample 64 ms submission
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    for(let i = digits.length-1; i>=0; i--) {
        if(digits[i] !== 9) {
            digits[i]++
            return digits
        } else {
            digits[i] = 0
        }
    }
    
    digits.unshift(1)
    return digits
};