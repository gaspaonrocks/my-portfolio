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
  constructor(props) {
    super(props);
    this.state = {
      activeItem: ""
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    return (
      <Menu secondary pointing vertical={this.props.vertical}>
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
