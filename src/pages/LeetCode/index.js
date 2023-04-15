import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeCard from "../../components/HomeCard";
import "./style.css"
import { atomOneDark, CopyBlock } from "react-code-blocks";

function LeetCode() {
    const leetcodeContent = [
        {
            title: "1. Two Sum",
            description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
            code: 
`var twoSum = function(nums, target) {
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
            description: "Given an integer x, return true if x is a palindrome, and false otherwise. Try to complete this challenge without turning the number into a string.",
            code: 
`var isPalindrome = function(x) {
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
code: 
`var romanToInt = function(s) {
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
code: 
`//  we are searching for the longest common prefix
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
description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.`,
code: 
`var isValid = function(s) {
    const bracketPair = {
        "(": ")",
        "{": "}",
        "[": "]",
    };

    let openingBrackets = [];
    if(!s) return false;

    for(let i=0; i<s.length; i++) {
      if(s[i] == '{' || s[i] == '(' || s[i] == '[') {
        openingBrackets.push(s[i]);
      } else if(bracketPair[openingBrackets.pop()] != s[i])
      return false;{ 
      }
    }
    return openingBrackets.length === 0;
};`,
        },
    ];
    return(
        <Container>
        <h1 className="cheatsheetTitle">LeetCode Cheatsheet</h1>
        <Row className="Home flex">
          {leetcodeContent.map((props) => (
            <Col sm="3" className="homeCard flex">
              <HomeCard 
                title={props.title} 
                description={props.description} 
                />
          <CopyBlock 
          text={props.code}
          language='javascript'
          showLineNumbers={false}
          theme={atomOneDark}/>
            </Col>
          ))}
        </Row>
      </Container>
    )
}

export default LeetCode;