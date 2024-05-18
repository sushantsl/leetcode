/**
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 

Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  //Start from the end of the string and move backwards
  let i = s.length;
  let length = 0;
  while (i > 0) {
    i--;
    if (s[i] !== " ") {
      //Not a space, so must be part of the word
      length++;
    } else if (length > 0) {
      //Space found while word length was being counted. We're done
      return length;
    } else {
      console.log("Trailing space. Ignore it");
    }
  }
  return length;
};
