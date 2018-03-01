import React, { Component } from "react";
import Loadable from "react-loadable";

import { Card, Image, Icon } from "semantic-ui-react";

export default class EducationItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.picture = require("../../assets/img/" + this.props.info.pic + ".jpg");
  }

  render() {
    return (
      <Card>
        <Image src={this.picture} />
        <Card.Content>
          <Card.Header>{this.props.info.name}</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    );
  }
}
