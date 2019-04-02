import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from './Image'

class App extends Component {
  constructor(){
    super()
    this.state = {
      url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
    }
  }

  render() {
    return (
      <div className="App">
        <Image url={this.state.url}/>
      </div>
    );
  }
}

export default App;
