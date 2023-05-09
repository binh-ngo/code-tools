import {React, useEffect, useContext} from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeCard from "../../components/HomeCard";
import "./style.css";
import { atomOneDark, CopyBlock } from "react-code-blocks";
import { Editor } from "../../components/Lexical/Editor";
import { AccountContext } from "../../components/User/Accounts.tsx";
import { leetcodeContent } from "./content";

function LeetCode() {
  // TODO: show code on click
  // const [showCode, setShowCode] = useState(false);

  // function toggleCode() {
  //     setShowCode(!showCode);
  // }

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
      <h1 className="cheatsheetTitle">LeetCode</h1>
      <Row className="Home flex">
        {leetcodeContent.map((props) => (
          <Col sm="3" className="homeCard flex">
            {/* <Button onClick={toggleCode}> */}
            <HomeCard title={props.title} description={props.description} />
            {/* </Button> */}
            <CopyBlock
              className="cLyCWT"
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

export default LeetCode;
