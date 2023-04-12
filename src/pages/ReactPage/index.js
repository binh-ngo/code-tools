import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeCard from "../../components/HomeCard";
import "./style.css"
import { CodeBlock, dracula } from "react-code-blocks";

function ReactPage() {
  const reactContent = [
    {
      title: "Components",
      description:
        "Components can be as small as a button, or take up the whole page. They must start with a capital letter to differentiate them from HTML tags, which must be lowercase.",
      code: `class Hello extends React.Component {
        render () {
          return <div className='message-box'>
            Hello {this.props.name}
          </div>
        }
      },`
      },
    {
      title: "Components",
      description:
        "Components can be as small as a button, or take up the whole page. They must start with a capital letter to differentiate them from HTML tags, which must be lowercase.",
      code: `class Hello extends React.Component {
        render () {
          return <div className='message-box'>
            Hello {this.props.name}
          </div>
        }
      },`
      },
    {
      title: "Components",
      description:
        "Components can be as small as a button, or take up the whole page. They must start with a capital letter to differentiate them from HTML tags, which must be lowercase.",
      code: `class Hello extends React.Component {
        render () {
          return <div className='message-box'>
            Hello {this.props.name}
          </div>
        }
      },`
      },
    {
      title: "Components",
      description:
        "Components can be as small as a button, or take up the whole page. They must start with a capital letter to differentiate them from HTML tags, which must be lowercase.",
      code: `class Hello extends React.Component {
        render () {
          return <div className='message-box'>
            Hello {this.props.name}
          </div>
        }
      },`
      },
    {
      title: "Components",
      description:
        "Components can be as small as a button, or take up the whole page. They must start with a capital letter to differentiate them from HTML tags, which must be lowercase.",
      code: `class Hello extends React.Component {
        render () {
          return <div className='message-box'>
            Hello {this.props.name}
          </div>
        }
      },`
      },
    {
      title: "Components",
      description:
        "Components can be as small as a button, or take up the whole page. They must start with a capital letter to differentiate them from HTML tags, which must be lowercase.",
      code: `class Hello extends React.Component {
        render () {
          return <div className='message-box'>
            Hello {this.props.name}
          </div>
        }
      },`
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
              />
        <CodeBlock 
        text={props.code}
        language='javascript'
        showLineNumbers={false}
        theme={dracula}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ReactPage;
