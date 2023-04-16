import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HomeCard from '../HomeCard';
import "./style.css"
import { atomOneDark, CodeBlock } from "react-code-blocks";

export const Algorithms = () => {
    const algorithmContent = {};
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
  </Container>
  )
}
