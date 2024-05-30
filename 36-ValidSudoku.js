/**
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.

 * @param {character[][]} board
 * @return {boolean}
 */

function isValidNum(n) {
  let num = Number(n);
  if (isNaN(num)) {
    console.log("Invalid number:", n);
  }
  return num >= 1 && num <= 9;
}

function isValidRow(x, board) {
  const seen = new Set();
  for (let j = 0; j < 9; j++) {
    let num = board[x][j];
    if (num !== ".") {
      if (isValidNum(num) && !seen.has(num)) {
        seen.add(num);
      } else {
        return false;
      }
    }
  }
  return true;
}

function isValidColumn(y, board) {
  const seen = new Set();
  for (let i = 0; i < 9; i++) {
    let num = board[i][y];
    if (num !== ".") {
      if (isValidNum(num) && !seen.has(num)) {
        seen.add(num);
      } else {
        return false;
      }
    }
  }
  return true;
}

function isValidSquare(x, y, board) {
  const seen = new Set();
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let num = board[x + i][y + j];
      if (num !== ".") {
        if (isValidNum(num) && !seen.has(num)) {
          seen.add(num);
        } else {
          return false;
        }
      }
    }
  }
  return true;
}

var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    if (!isValidRow(i, board)) {
      return false;
    }
  }
  for (let j = 0; j < 9; j++) {
    if (!isValidColumn(j, board)) {
      return false;
    }
  }

  for (let x = 0; x < 9; x += 3) {
    for (let y = 0; y < 9; y += 3) {
      if (!isValidSquare(x, y, board)) {
        return false;
      }
    }
  }
  return true;
};
