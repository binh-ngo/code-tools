import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HomeCard from '../../components/HomeCard';
import "./style.css"
import { atomOneDark, CodeBlock } from "react-code-blocks";
import {Editor} from "../../components/Lexical/Editor.js"


function Algorithms() {
    const algorithmContent = [
      {
        title: "A. Sliding Window Algorithm",
        description: `Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.`,
        code:
`Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest 
subarray is underlined.

Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],  k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
}
-----------------------SOLUTION-------------------------
var longestOnes = function(nums, k) {

    let left = 0, right = 0;
    
    while(right < nums.length) {
// k will be reduced whenever the right pointer targets a 0
        if(nums[right] === 0) k--;
  // k cannot be less than 0, if the left pointer targets a 0 
  while k is at -1 (one too many flipped 0's), the left pointer 
  moves past that 0 and allows the right pointer to flip a 
  future 0.
        if(k < 0) {
            if(nums[left] === 0) k++;
            left++;
        }
        right++;
    }
    return right-left;
};
`,
                },
    ];
  return (
    <Container>
    <h1 className="cheatsheetTitle">LeetCode Cheatsheet</h1>
    <Row className="Home flex">
      {algorithmContent.map((props) => (
        <Col sm="3" className="homeCard flex">
          <HomeCard 
            title={props.title} 
            description={props.description} 
            />
      <CodeBlock 
      text={props.code}
      language='javascript'
      showLineNumbers={false}
      theme={atomOneDark}/>
        </Col>
      ))}
    </Row>
      <Editor />
  </Container>
  )
}

export default Algorithms;