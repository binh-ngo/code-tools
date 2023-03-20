import React from "react";
import { BsFillHouseFill } from "react-icons/bs";
import { AiFillHtml5, AiFillLinkedin } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiGithubBadge } from "react-icons/di";
import "./style.css";
import { Button, Col, Row} from "react-bootstrap";

function Sidebar() {
  return (
        <Col className="sidebar" sm="4">
        <div className="col-auto min-vh-100 bg-dark dropdown">
          <h1>Code Tools</h1>
          <ul>
            <li className="sidebar-links">
              <Button href="/" className="nav-link px-2">
                <BsFillHouseFill />{" "}
                <span className="ms-1 d-none d-sm-inline">Home</span>
              </Button>
            </li>
            <li>
              <Button href="/html" className="nav-link px-2">
                <AiFillHtml5 />{" "}
                <span className="ms-1 d-none d-sm-inline">HTML</span>
              </Button>
            </li>
            <li>
              <Button href="/css" className="nav-link px-2">
                <DiCss3 /> <span className="ms-1 d-none d-sm-inline">CSS</span>
              </Button>
            </li>
            <li>
              <Button href="/javascript" className="nav-link px-2">
                <DiJavascript1 />{" "}
                <span className="ms-1 d-none d-sm-inline">Javascript</span>
              </Button>
            </li>
          </ul>
          <h2>Made by Binh-Nguyen Ngo</h2>
          <Row className="flex linkIcons">
          <a href="https://github.com/binh-ngo/code-tools">
              <DiGithubBadge style={{ fontSize: "3rem" }} />
          </a>
          <a href="https://www.linkedin.com/in/binh-nguyen-ngo/">
              <AiFillLinkedin style={{ fontSize: "3rem" }}/>
          </a>
          </Row>
          </div>
        </Col>
  );
}

export default Sidebar;
