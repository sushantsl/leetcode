/**
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.

 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // Build map of characters from magazine
  let charFrequency = {};
  for (const char of magazine) {
    if (char in charFrequency) {
      charFrequency[char]++;
    } else {
      charFrequency[char] = 1;
    }
  }
  for (const r of ransomNote) {
    if (charFrequency[r] && charFrequency[r] > 0) {
      charFrequency[r]--;
    } else {
      return false;
    }
  }
  return true;
};
