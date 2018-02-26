import React, { Component } from "react";
import Routes from "../../config/Routes";
import { Container, Header } from "semantic-ui-react";
import "./Main.css";

export default class MainView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container fluid className="container">
        <Header as="h3">Application Content</Header>
        <Routes />
      </Container>
    );
  }
}
