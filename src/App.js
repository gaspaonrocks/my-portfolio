import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import { Grid } from "semantic-ui-react";

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
    this.setState(prevState => ({ visible: !prevState.visible }));
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
