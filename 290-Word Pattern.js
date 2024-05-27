/**
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
 

Constraints:

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const words = s.split(" ");

  if (pattern.length != words.length) {
    return false;
  }

  const forwardMap = new Map();
  const reverseMap = new Map();

  for (let i = 0; i < words.length; i++) {
    let c = pattern[i];
    let w = words[i];
    if (!forwardMap.has(c)) {
      forwardMap.set(c, w);
    } else if (forwardMap.get(c) != w) {
      return false;
    }
    if (!reverseMap.has(w)) {
      reverseMap.set(w, c);
    } else if (reverseMap.get(w) != c) {
      return false;
    }
  }
  return true;
};

const p = "abba";
const s = "dog constructor constructor dog";
console.log(wordPattern(p, s)); //true
