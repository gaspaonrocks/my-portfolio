import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import Navbar from './layout/navigation/Navbar';
import MainView from './layout/main-view/Main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <MainView />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
