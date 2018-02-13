import React, { Component } from "react";
import Routes from "../../config/Routes";
import { Container } from "semantic-ui-react";

export default class MainView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container fluid>
        <Routes />
      </Container>
    );
  }
}
