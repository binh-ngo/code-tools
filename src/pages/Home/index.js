import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import HomeCard from "../../components/HomeCard";
import './style.css'

function Home() {
  return (
    <Container>
      <Row className="Home flex">
        <Col sm="4" className="homeCard flex">
          <HomeCard
            title="HTML"
            description="Click me if you want to learn some HTML tips!"
          />
        </Col>
        <Col sm="4" className="homeCard">
          <HomeCard
            title="CSS"
            description="Click me if you want to learn some CSS tips!"
            />
        </Col>
      </Row>
      <Row className="Home flex">
        <Col sm="4" className="homeCard">
          <HomeCard
            title="Javascript"
            description="Click me if you want to learn some Javascript tips!"
            />
        </Col>
            </Row>
            </Container>
  );
}

export default Home;
