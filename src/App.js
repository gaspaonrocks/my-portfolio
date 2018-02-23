import React, { Component } from "react";
import { HashRouter } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import Navbar from "./layout/navigation/Navbar";
import MainView from "./layout/main-view/Main";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          <Navbar />
          <MainView />
        </div>
      </HashRouter>
    );
  }
}

export default App;
