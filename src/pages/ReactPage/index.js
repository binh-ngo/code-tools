import {React, useEffect, useContext} from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeCard from "../../components/HomeCard";
import "./style.css";
import { atomOneDark, CopyBlock } from "react-code-blocks";
import { Editor } from "../../components/Lexical/Editor";
import { AccountContext } from "../../components/User/Accounts.tsx";


function ReactPage() {
  const reactContent = [
    {
      title: "Installation",
      description:
        "Follow the code below to create a new react app. If you already created a repository that you want to turn into a react app, navigate to your root directory, and replace the name of the app from the code below with a period ( . ).",
      code: `
      npx create-react-app <my-react-app>`,
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
      },`,
    },
    {
      title: "Importing Multiple Exports",
      description:
        "When you import react components or other npm dependencies, you can establish a name for * in that package, or surround a specific component from that package with curly brackets.",
      code: `import React, { Component } from 'react'
import * as reactDom from 'react-dom'
import { Row, Col, Container } from 'react-bootstrap'

class Hello extends Component {
...
}`,
    },
    {
      title: "State Hook",
      description:
        "States are used to manage dynamic data. In this example, you set the count to 0 and update it with setCount() by adding 1 every time you click the button.",
      code: `function MyButton() {
        const [count, setCount] = useState(0);
      
        function handleClick() {
          setCount(count + 1);
        }
      
        return (
          <button onClick={ handleClick }>
            Clicked { count } times
          </button>
        );
      }`,
    },
    {
      title: "Effect Hook",
      description:
        "Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.",
      code: `function ChatRoom( { roomId } ) {
        useEffect( ( ) => {
          const connection = createConnection( roomId );
          connection.connect( );
          return ( ) => connection.disconnect( );
        }, [ roomId ] );
        // ...`,
    },
    {
      title: "DOM Events",
      description:
        "In this code block, the user types their input and the program saves and updates it by every keystroke.",
      code: `class MyComponent extends Component {
        render () {
          <input type="text"
              value={this.state.value}
              onChange={event => this.onChange(event)} />
        }
      
        onChange (event) {
          this.setState({ value: event.target.value })
        }
      }`,
    },
  ];
  const {loggedInUser, resetCurrentAuthedUser} = useContext(AccountContext);

  useEffect(() => {
    const checkAuth = async () => {
      await resetCurrentAuthedUser();
    };
    if (!loggedInUser) {
      checkAuth();
    }
  }, [loggedInUser, resetCurrentAuthedUser]);
  return (
    <Container>
      <h1 className="cheatsheetTitle">React</h1>
      <Row className="Home flex">
        {reactContent.map((props) => (
          <Col sm="3" className="homeCard flex">
            <HomeCard title={props.title} description={props.description} />
            <CopyBlock
              text={props.code}
              language="javascript"
              showLineNumbers={false}
              theme={atomOneDark}
            />
          </Col>
        ))}
      </Row>
      {loggedInUser && (
        <div>
          <Editor />
        </div>
      )}{" "}
    </Container>
  );
}

export default ReactPage;
