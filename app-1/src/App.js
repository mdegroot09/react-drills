import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: ''
    }
  }

  handleChange = (val) => {
    this.setState({userInput: val})
  }

  render() {
    return (
      <div className="App">
        <input onChange={(event) => {this.handleChange(event.target.value)}}></input>
        <div>
          <br/>
          <span>{this.state.userInput}</span>
        </div>
      </div>
    );
  }
}

export default App;
