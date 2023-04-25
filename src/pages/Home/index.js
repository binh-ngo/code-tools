import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import HomeCard from "../../components/HomeCard";
import { Editor } from "../../components/Lexical/Editor";
import './style.css'

function Home() {
  const homeContent = [
    {
      title: "React",
      description: "Click me if you want to learn some React tips!"
    },
    {
      title: "Algorithms",
      description: "Click me if you want to learn some tips on algorithms!"
    },
    {
      title: "CDK",
      description: "Click me if you want to learn some CDK tips!"
    },
    {
      title: "LeetCode",
      description: "Click me if you want to learn some LeetCode tips!"
    },
  ]
  return (
    <Container>
      <Row className="Home flex">
        {homeContent.map((props) => (
          <Col sm="3" className="homeCard flex">
            <HomeCard
              title={props.title}
              description={props.description}
            />
        </Col>
        ))}
            </Row>
            <Editor />
            </Container>
  );
}

export default Home;
