import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
const word = "Hello";


class App extends Component {
  render() {

    return (
      <div className="bg">
      
        <div className="App">
        <div className="text">
          Lab 03 - react
          
        </div>
        <div className="text">
          Teerawut Sararam
        </div>
          
          <WordCard value="Hello" />
          
        </div>
      </div>
      
    );
  }
}

export default App;
