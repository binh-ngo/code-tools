import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import HomeCard from "../../components/HomeCard";
import './style.css'

function Home() {
  const homeContent = [
    {
      title: "React",
      description: "Click me if you want to learn some React tips!"
    },
    {
      title: "Javascript",
      description: "Click me if you want to learn some Javascript tips!"
    },
    {
      title: "CDK",
      description: "Click me if you want to learn some CDK tips!"
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
            </Container>
  );
}

export default Home;
