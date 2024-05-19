/**
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 
Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let h = haystack.length;
  let n = needle.length;

  // i = Start of sliding window
  for (let i = 0; i <= h - n; i++) {
    for (let j = 0; j < n; j++) {
      if (haystack[i + j] != needle[j]) {
        break;
      }
      if (j == n - 1) {
        // Did not find a mismatch and all characters of needle are matching. Return start of sliding window
        return i;
      }
    }
  }
  return -1;
};
