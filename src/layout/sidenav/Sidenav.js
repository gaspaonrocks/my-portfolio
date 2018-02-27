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

const LoadNav = Loadable({
  loader: () => import("../navigation/Navbar"),
  loading() {
    return <div>Loading...</div>;
  }
});

const LoadMainView = Loadable({
  loader: () => import("../main-view/Main"),
  loading() {
    return <div>Loading...</div>;
  }
});

export default class Sidenav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible,
      direction: "top",
      vertical: false,
      animation: "push"
    };
  }

  componentDidMount() {
    if (window.screen.availWidth <= 750) {
      this.setState({
        direction: "left",
        vertical: true,
        animation: "overlay"
      });
    }
  }

  render() {
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation={this.state.animation}
            width="thin"
            visible={this.props.visible}
            icon="labeled"
            direction={this.state.direction}
          >
            <LoadNav vertical={this.state.vertical} />
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <LoadMainView />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
