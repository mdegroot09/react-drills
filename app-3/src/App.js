import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      filterString: '',
      array: [
        'movies', 'restaurants', 'bowling', 'swimming', 'sports'
      ]
    }
  }

  handleChange(val){
    this.setState({filterString: val})
  }
  
  render() {
    let activities = this.state.array.filter((activity, index) => {
      return activity.includes(this.state.filterString)
    })
    activities = activities.map((activity, index) => {
      return <h2 key={index}>{activity}</h2>
    })

    return (
      <div className="App">
        <input onChange={(event) => {this.handleChange(event.target.value)}} type='text'></input>
        {activities}
      </div>
    );
  }
}

export default App;
