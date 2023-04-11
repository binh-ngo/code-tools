import React from "react";
import { BsFillHouseFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { DiGithubBadge } from "react-icons/di";
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
              <Button href="https://www.linkedin.com/in/binh-nguyen-ngo/" target="_blank" rel="noreferrer" style={{fontSize: "1.75rem"}} className="nav-link px-2">
                <AiFillLinkedin />{" "}
              </Button>
            </li>
            <li>
              <Button href="https://github.com/binh-ngo/code-tools" style={{fontSize: "2rem"}} className="nav-link px-2">
                <DiGithubBadge />
              </Button>
            </li>

          </ul>
          </div>
        </Col>
  );
}

export default Sidebar;
