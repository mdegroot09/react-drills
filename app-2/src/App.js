import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      array: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    }
  }

  render() {
    let lettersToDisplay = this.state.array.map((letter, index) => {
      return <h2 key={index}>{letter}</h2>
    })
    return (
      <div className="App">
        {lettersToDisplay}
      </div>
    );
  }
}

export default App;
