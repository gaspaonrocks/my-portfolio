import React, { Component } from "react";
import { HashRouter } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import Loadable from "react-loadable";

const LoadNavbar = Loadable({
  loader: () => import("./layout/navigation/Navbar"),
  loading() {
    return <div>Loading...</div>;
  }
});

const LoadMainView = Loadable({
  loader: () => import("./layout/main-view/Main"),
  loading() {
    return <div>Loading...</div>;
  }
});

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          <LoadNavbar />
          <LoadMainView />
        </div>
      </HashRouter>
    );
  }
}

export default App;
