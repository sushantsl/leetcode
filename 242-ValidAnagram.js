/**
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length === t.length) {
    const sChars = s.split("");
    const frequency = {};
    for (let key of sChars) {
      if (!(key in frequency)) {
        frequency[key] = 1;
      } else {
        frequency[key]++;
      }
    }
    for (let i = 0; i < t.length; i++) {
      let char = t[i];
      if (char in frequency) {
        frequency[char]--;
        if (frequency[char] < 0) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  }
  return false;
};
