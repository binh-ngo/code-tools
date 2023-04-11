import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeCard from "../../components/HomeCard";
import component from "../../assets/Screenshot 2023-04-11 at 10.13.34 AM.png"
import "./style.css"

function ReactPage() {
  const reactContent = [
    {
      title: "Components",
      description:
        "Components can be as small as a button, or take up the whole page. They must start with a capital letter to differentiate them from HTML tags, which must be lowercase.",
    },
    {
      title: "Components",
      description:
        "Components can be as small as a button, or take up the whole page. They must start with a capital letter to differentiate them from HTML tags, which must be lowercase.",
    },
    {
      title: "Components",
      description:
        "Components can be as small as a button, or take up the whole page. They must start with a capital letter to differentiate them from HTML tags, which must be lowercase.",  
    },
    {
      title: "Components",
      description:
        "Components can be as small as a button, or take up the whole page. They must start with a capital letter to differentiate them from HTML tags, which must be lowercase.",  
    },
    {
      title: "Components",
      description:
        "Components can be as small as a button, or take up the whole page. They must start with a capital letter to differentiate them from HTML tags, which must be lowercase.",  
    },
    {
      title: "Components",
      description:
        "Components can be as small as a button, or take up the whole page. They must start with a capital letter to differentiate them from HTML tags, which must be lowercase.",
      src: component,
      alt: "Description of components."   
    },
  ];
  return (
    <Container>
      <h1 className="cheatsheetTitle">React Cheatsheet</h1>
      <Row className="Home flex">
        {reactContent.map((props) => (
          <Col sm="3" className="homeCard flex">
            <HomeCard 
              title={props.title} 
              description={props.description} 
              src={props.src}
              alt={props.alt}
              />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ReactPage;
