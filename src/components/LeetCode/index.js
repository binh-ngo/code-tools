import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeCard from "../../components/HomeCard";
import "./style.css"
import { atomOneDark, CopyBlock } from "react-code-blocks";

function LeetCode() {
    const leetcodeContent = [
        {
            title: "Two Sum",
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
            title: "Palindrome Number",
            description: "",
            code: ``,
        },
        {
            title: "Roman to Integer",
            description: "",
            code: ``,
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