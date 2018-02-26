import React, { Component } from "react";
import { HashRouter } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import Loadable from "react-loadable";

const LoadBanner = Loadable({
  loader: () => import("./layout/header/HeaderBanner"),
  loading() {
    return <div>Loading...</div>;
  }
});

const LoadSideNav = Loadable({
  loader: () => import("./layout/sidenav/Sidenav"),
  loading() {
    return <div>Loading...</div>;
  }
});

class App extends Component {
  constructor() {
    super();
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.state = { visible: false };
  }
  handleStatusChange(e) {
    // this.setState({ visible: !this.state.visible });
    this.state.visible === true
      ? this.setState({ visible: false })
      : this.setState({ visible: true });
  }
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          <LoadBanner onStatusChange={this.handleStatusChange} />
          <LoadSideNav visible={this.state.visible} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
