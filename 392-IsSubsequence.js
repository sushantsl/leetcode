/**
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
 

Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let pSource = 0;
  let pTarget = 0;
  while (pSource < s.length && pTarget < t.length) {
    if (s[pSource] == t[pTarget]) {
      pSource++;
    }
    pTarget++;
  }
  return pSource == s.length;
};

//Second approach
var isSubsequence2 = function (s, t) {
  //Build map of target string chars to their indices
  const charToIndices = {};
  for (let i = 0; i < t.length; i++) {
    if (t[i] in charToIndices) {
      charToIndices[t[i]].push(i);
    } else {
      charToIndices[t[i]] = [i];
    }
  }

  let currMatchIndex = -1;
  for (const c of s) {
    if (!c in charToIndices) {
      //Exit early if any character in source is not found in target
      return false;
    }

    let matched = false;
    for (let i = 0; i < charToIndices[c]?.length; i++) {
      let idx = charToIndices[c][i];
      if (currMatchIndex < idx) {
        currMatchIndex = idx;
        matched = true;
        break;
      }
    }
    if (!matched) {
      return false;
    }
  }
  //All chars in source string matched
  return true;
};
