export const leetcodeContent = [
    {
      title: "1. Two Sum",
      description:
        "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
      code: `var twoSum = function(nums, target) {
// establish an array to store the nums that equal target
const solution = [];
// the first for loop cycles through each number in the nums array
for(var i = 0; i < nums.length; i++) {
// at each number the first for loop stops at, this second for loop checks every number after
    for(var j = i+1; j < nums.length; j++) {
// if the program finds two numbers that == target, push to the solution array and return it
    if(nums[j] + nums[i] == target) {
        solution.push(i);
        solution.push(j);
            }
        }
    }
    return solution;
    // time complexity O(n^2)
};`,
    },
    {
      title: "9. Palindrome Number",
      description:
        "Given an integer x, return true if x is a palindrome, and false otherwise. Try to complete this challenge without turning the number into a string.",
      code: `var isPalindrome = function(x) {
  // negative numbers can never be a palindrome
  if(x<0) return false;
  // set up the variable for the reversed number
  let reverse = 0;
  // for loop will keep running as long as i is divisible by 10 and is greater than 1
      for(let i=x; i>=1; i=Math.floor(i/10)) 
      reverse = reverse*10 + i%10;
      // just to demonstrate reversing a number
      // i = 123
      // reverse = 0, reverse = 123%10 == 3
      // i = 12
      // reverse = 3, reverse =30 + 12%10
      // i = 1
      //  reverse = 32, reverse = 320 + 1%10
      // reverse = 321
      // stop the for loop when reverse === x;
      return reverse === x;
      // time complexity O(n)
};`,
    },
    {
      title: "13. Roman to Integer",
      description: `Given roman numerals "III", "LVIII", and "LVIII", convert it to an integer.`,
      code: `var romanToInt = function(s) {
  const roman = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }
  let result = 0;
  for(let i=0; i<s.length; i++) {
// targets the roman numeral and converts it to its integer value
      const current = roman[s[i]];
      const next = roman[s[i+1]];
      if(current < next) {
// only current and next integers are considered when the current is less than the next. once it is resolved, jump to the next new number.
          result += next - current;
          i++;
      } else {
// or keep adding the next number if the next number is <= to the current
          result += current;
      }
  }
      return result;
      // time complexity O(n)
};`,
    },
    {
      title: "14. Longest Common Prefix",
      description: `Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".`,
      code: `//  we are searching for the longest common prefix
// not a substring. This means the prefix has to be in the beginning of the word.

var longestCommonPrefix = function(strs) {
    // return if there's no input
    if(!strs.length) return '';
// loops through the letters of the first word
    for(let i=0; i <= strs[0].length; i++) {
//  trim the word from the beginning to where the program encounters an index that doesn't hold the same character among all strings
        if(!strs.every((string) => string[i] === strs[0][i])) {
            return strs[0].slice(0,i);
        }
    }
    return strs[0];
    // time complexity O(n*m)
};`,
    },
    {
      title: "20. Valid Parentheses",
      description: `Given a string s containing just the characters (  ,  )  ,  {  ,  }  ,  [  , and  ]  , determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.`,
      code: `var isValid = function(s) {
    const bracketPair = {
        "(": ")",
        "{": "}",
        "[": "]",
    };

    let openingBrackets = [];
    if(!s) return false;

    for(let i=0; i<s.length; i++) {
     // pushes all opening brackets to the array
      if(s[i] == '{' || s[i] == '(' || s[i] == '[') {
        openingBrackets.push(s[i]);
    // when the program comes across a closing bracket, if it != to the last bracket in the openingBrackets array's value in the bracketPair object, return false. .pop() also removes the opening bracket from the array.
      } else if (bracketPair[openingBrackets.pop()] != s[i])
      return false;{ 
      }
    }
    return openingBrackets.length === 0;
};`,
    },
    {
      title: "217. Contains Duplicate",
      description: `Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.`,
      code:
`Using a Loop
// Time: O(nlogn)
// Space: O(1)
var containsDuplicate = function(nums) {
    nums.sort((a,b) => a-b);
    for(let i = 0; i <= nums.length-1; i++){
        if(nums[i] === nums[i+1]){
            return true
        }
    }
    return false
};

Set method
// Time complexity: O(n)
// Space complexity: O(n)
var containsDuplicate = function(nums) {
    const s = new Set(nums); 
    return s.size !== nums.length
};`,
    },
    {
      title: "242. Valid Anagram",
      description: `Given two strings s and t, return true if t is an anagram of s, and false otherwise.`,
      code:
`var isAnagram = function(s, t) {
  // if both strings don't have the same amount of letters, there cannot be an anagram.
  if (s.length != t.length) return false;

  // splits the string into an array, sorts letters alphabetically, and joins the array back into a string.
  var sortedS = s.split("").sort().join("");
  var sortedT = t.split("").sort().join("");
  
  // return a boolean if the sorted strings are equal.
  return sortedS == sortedT;

};`,
    },
    {
      title: "49. Group Anagrams",
      description: `Given an array of strings strs, group the anagrams together. You can return the answer in any order.`,
      code:
`var groupAnagrams = function(strs) {
  let obj = {};
  //  for every string in the array strs
  for(let str of strs) {
  // sort them
      let letters = str.split("").sort().join("");
  // if there is a key in the obj with the sorted letters, push the original str as the value of said key. If not, create a new key-value pair
      obj[letters] ? obj[letters].push(str) : obj[letters] = [str]
  }
  // return all the values of the obj
  return Object.values(obj)
};`,
    },
  ];