import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import logo from "./logo.svg";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

import Navbar from "./layout/navigation/Navbar";
import MainView from "./layout/main-view/Main";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <MainView category="" />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
