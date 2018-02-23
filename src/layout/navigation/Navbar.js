import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Segment, Dropdown, Icon } from "semantic-ui-react";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = { activeItem: "" };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary pointing>
        <Menu.Item
          name="home"
          as={NavLink}
          to="/home"
          active={this.state.activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="education"
          as={NavLink}
          to="/education"
          active={this.state.activeItem === "education"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="experience"
          as={NavLink}
          to="/experience"
          active={this.state.activeItem === "experience"}
          onClick={this.handleItemClick}
        />
        <Dropdown pointing name="gallery" text="Gallery" item>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Dropdown text="New">
                <Dropdown.Menu>
                  <Dropdown.Item>Document</Dropdown.Item>
                  <Dropdown.Item>Image</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Item>

            <Dropdown.Item
              as={NavLink}
              to="/hackouphene"
              name="hackouphene"
              onClick={this.handleItemClick}
            >
              Hackouphene
            </Dropdown.Item>

            <Dropdown.Item
              as={NavLink}
              to="/vue-project"
              name="vue-project"
              onClick={this.handleItemClick}
            >
              Vue project
            </Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Item
              as={NavLink}
              to="/pixi-project"
              name="pixi-project"
              onClick={this.handleItemClick}
            >
              PixiGame Project
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    );
  }
}
