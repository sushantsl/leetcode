/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

//Slow
var containsNearbyDuplicateBruteForce = function (nums, k) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
};

//Fast-ish
var containsNearbyDuplicateUsingMap = function (nums, k) {
  //Build a map of numbers to lists of their indices
  const numToIndices = {};
  for (const key in nums) {
    const val = nums[key];
    if (val in numToIndices) {
      numToIndices[val].push(key);
    } else {
      numToIndices[val] = [key];
    }
  }

  for (let idx = 0; idx < nums.length; idx++) {
    const num = nums[idx];
    const list = numToIndices[num];
    if (list.length > 1) {
      for (let i = 0; i < list.length - 1; i++) {
        for (let j = i + 1; j < list.length; j++) {
          if (Math.abs(list[i] - list[j]) <= k) {
            return true;
          }
        }
      }
    }
  }
  return false;
};

//Fast
var containsNearbyDuplicateUsingSet = function (nums, k) {
  //Maintain a set of numbers of fixed length k
  const kNums = new Set();

  for (let i = 0; i < nums.length; ++i) {
    if (kNums.has(nums[i])) {
      return true;
    }
    kNums.add(nums[i]);
    if (kNums.size > k) {
      //Remove element as it does not satisfy the condition
      kNums.delete(nums[i - k]);
    }
  }
  return false;
};
