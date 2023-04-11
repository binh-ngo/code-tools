import React from "react";
import { BsFillHouseFill } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1 } from "react-icons/di";
import "./style.css";
import { Button, Col} from "react-bootstrap";

function Sidebar() {
  return (
        <Col className="sidebar" sm="4">
        <div className="col-auto min-vh-100">
          <ul className="flex">
            <li className="sidebar-links">
              <Button href="/" className="nav-link px-2">
                <BsFillHouseFill />{" "}
              </Button>
            </li>
            <li>
              <Button href="/html" className="nav-link px-2">
                <AiFillHtml5 />{" "}
              </Button>
            </li>
            <li>
              <Button href="/css" className="nav-link px-2">
                <DiCss3 />
              </Button>
            </li>
            <li>
              <Button href="/javascript" className="nav-link px-2">
                <DiJavascript1 />{" "}
              </Button>
            </li>
          </ul>
          </div>
        </Col>
  );
}

export default Sidebar;
