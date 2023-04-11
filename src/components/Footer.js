import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { AiFillLinkedin } from "react-icons/ai";
import { DiGithubBadge } from "react-icons/di";
import "../style.css"

function Footer() {
  return (
    <Row className="footer flex">
      <Col sm="3">
        <h2><a href="binhngo.me" target="_blank">Made by Binh-Nguyen Ngo</a></h2>
      </Col>
      <Col sm="9" className="icons">
        <Button href="https://github.com/binh-ngo/code-tools">
          <DiGithubBadge style={{ fontSize: "2.5rem", color: "black" }} />
        </Button>
        <Button href="https://www.linkedin.com/in/binh-nguyen-ngo/">
          <AiFillLinkedin style={{ fontSize: "2.5rem", color:"black" }} />
        </Button>
      </Col>
    </Row>
  );
}

export default Footer;
