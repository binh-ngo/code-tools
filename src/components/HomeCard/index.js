import React from "react";
import "./style.css";
import Card from 'react-bootstrap/Card'

export default function HomeCard(props) {

  return (
      <a href={`/${props.title.toLowerCase()}`}>
    <Card id="homeCard" className="card col-4" key={props.id}>
      <div id="homeInfoDiv">
        <Card.Title id="homeTitle">{props.title}</Card.Title>
        <Card.Body className="homeText">{props.description}</Card.Body>
      </div>
    </Card>
    </a>
  );
}

