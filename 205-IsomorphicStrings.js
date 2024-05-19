/**
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.

 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let forwardMap = new Array(256).fill(-1);
  let reverseMap = new Array(256).fill(-1);

  for (let i = 0; i < s.length; i++) {
    let c1 = s.charCodeAt(i);
    let c2 = t.charCodeAt(i);

    // Case 1: No mapping exists in either of the dictionaries
    if (forwardMap[c1] == -1 && reverseMap[c2] == -1) {
      forwardMap[c1] = c2;
      reverseMap[c2] = c1;
    }
    // Case 2: Mapping doesn't exist or Mapping doesn't match in either of the dictionaries or both
    else if (!(forwardMap[c1] == c2 && reverseMap[c2] == c1)) {
      return false;
    }
  }
  return true;
};
