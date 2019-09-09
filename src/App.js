import React, { Component } from 'react';
import './App.css';
import Content from './Content';

let x = 10;
class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World
        <Content />
      </div>
    );
  }
}
export default App;