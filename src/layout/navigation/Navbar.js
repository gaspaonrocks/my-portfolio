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
import Loadable from "react-loadable";

const data = ["home", "education", "experience", "gallery"];

const LoadItem = Loadable({
  loader: () => import("./Navbar.Item"),
  loading() {
    return <div>Loading...</div>;
  }
});

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
      <Menu fluid compact secondary pointing vertical={this.props.vertical}>
        {data.map(e => {
          return (
            <LoadItem
              key={e}
              name={e}
              active={this.state.activeItem === e}
              onClick={this.handleItemClick}
            />
          );
        })}
      </Menu>
    );
  }
}
