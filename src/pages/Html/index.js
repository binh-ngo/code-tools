import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './style.css'

function HTML() {
    const htmlContent = [
        {
            title: "Forms",
            description: "Handy Dandy Forms" 
        },
        {
            title: "Buttons",
            description: "Handy Dandy Buttons" 
        },
        {
            title: "Text Input",
            description: "Handy Dandy Text" 
        },
        {
            title: "Date/Time Input",
            description: "Handy Dandy Date/Time input" 
        },
    ]
  return (
    <Container>
        <Row className="Home flex">
        {htmlContent.map((props) => (
            <Col sm="3">
    <a href={`/${props.title.toLowerCase()}`}>
    <Card id="homeCard" className="card col-4" key={props.id}>
      <div id="homeInfoDiv">
        <Card.Title id="homeTitle">{props.title}</Card.Title>
        <Card.Body className="homeText">{props.description}</Card.Body>
      </div>
    </Card>
    </a>
            </Col>
        ))}
        </Row>
      </Container>
  );
}

export default HTML;
