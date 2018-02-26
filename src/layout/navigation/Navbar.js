import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  Dropdown,
  Icon,
  Button,
  Sidebar,
  Segment,
  Header
} from "semantic-ui-react";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: "",
      vertical: false
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    return (
      <Menu stackable secondary pointing vertical={this.state.vertical}>
        {["home", "education", "experience", "gallery"].map(e => {
          return (
            <Menu.Item
              key={e}
              name={e}
              as={NavLink}
              to={`/${e}`}
              active={this.state.activeItem === e}
              onClick={this.handleItemClick}
            />
          );
        })}
      </Menu>
    );
  }
}
