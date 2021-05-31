// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0


// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let subs="";
    let max=0;
    let maxsubs="";
    for(var i=0;i<s.length;i++){
        if(subs.includes(s[i])){            
            if(subs.length>max){
                maxsubs=subs;
                max=subs.length;
            }
            let idx=subs.indexOf(s[i]);
            subs=subs.substring(idx+1);
        }
        subs+=s[i];        
    }
    if(subs.length>max){
        maxsubs=subs;
        max=subs.length;
    }
    return max;
};

// 987 / 987 test cases passed.
// Status: Accepted
// Runtime: 96 ms
// Memory Usage: 44.3 MB

// TestCases
// "abcabcdb"
// "abcabcbb"
// "bbbbb"
// "pwwkew"
// ""
// " "
// "abcabcdabcde"
// "dvdf"

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let subs = "";
    let max = 0;
    for (var i = 0; i < s.length; i++) {
        let idx = subs.indexOf(s[i]);
        if (idx > -1) {
            subs = subs.substring(idx + 1);
        }
        subs += s[i];
        if (subs.length > max) {
            max = subs.length;
        }
    }
    return max;
};
// 987 / 987 test cases passed.
// Status: Accepted
// Runtime: 104 ms
// Memory Usage: 44.5 MB