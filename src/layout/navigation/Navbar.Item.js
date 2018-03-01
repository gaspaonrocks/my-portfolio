import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default class NavbarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Menu.Item name={this.props.name} as={NavLink} to={`/${this.props.name}`} />;
  }
}
