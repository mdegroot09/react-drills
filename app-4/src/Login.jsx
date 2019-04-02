import React, {Component} from 'react'

export default class Login extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  updateUsername = (val) => {
    this.setState({username: val})
  }

  updatePassword = (val) => {
    this.setState({password: val})
  }

  handleLogin = (username, password) => {
    alert('Username: ' + username + ' Password: ' + password)
  }

  render(){
    return (
      <div>
        <input placeholder='username' type='text' onChange={(event) => {this.updateUsername(event.target.value)}}/>
        <input placeholder='password' type='text' onChange={(event) => {this.updatePassword(event.target.value)}}/>
        <button onClick={() => {this.handleLogin(this.state.username, this.state.password)}}>Login</button>
      </div>
    )
  }
}