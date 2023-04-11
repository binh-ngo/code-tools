import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HomeCard from '../../components/HomeCard';

function ReactPage() {
    const reactContent = [
    {
        title: "Example",
        description: ""
    }
]
  return (

            <Container>
      <Row className="Home flex">
        {reactContent.map((props) => (
          <Col sm="3" className="homeCard flex">
            <HomeCard
              title={props.title}
              description={props.description}
            />
        </Col>
        ))}
            </Row>
            </Container>
  )
}

export default ReactPage;