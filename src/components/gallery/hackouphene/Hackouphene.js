import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import hackApp from "./hack-src/index.html";

import "./Hackouphene.css";

export default class Hackouphene extends Component {
  render() {
    return (
      <Container fluid>
        <iframe
          className="container"
          sandbox="allow-scripts allow-forms allow-modals"
          srcDoc={hackApp}
        />
      </Container>
    );
  }
}
