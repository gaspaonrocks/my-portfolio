import React, { Component } from "react";
import Loadable from "react-loadable";

import { Item } from "semantic-ui-react";

export default class ExperienceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Item>
        <Item.Image size="tiny" src={this.props.info.pic} />

        <Item.Content>
          <Item.Header as="a">{this.props.info.name}</Item.Header>
          <Item.Meta>Description</Item.Meta>
          <Item.Description>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Item.Description>
          <Item.Extra>Additional Details</Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}
