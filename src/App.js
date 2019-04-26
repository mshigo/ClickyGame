import React, { Component } from 'react';
import Nav from "./components/nav";
import Photos from "./components/images";
import Jumbo from './components/jumbo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <Jumbo />
      <Photos />
      </div>
    );
  }
}
export default App;
