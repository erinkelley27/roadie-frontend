import React, { Component } from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import axios from 'axios'
import '../../index.css'

import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Logout from '../Logout/Logout'

class App extends Component {
  constructor () {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      image: '',
      city: '',
      state: '',
      recsVisited: 0,
      email: '',
      password: '',
      isLoggedIn: false
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount () {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  handleLogout () {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }

  handleInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignup (e) {
    e.preventDefault()
    axios.post('http://localhost:3001/user/signup', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      city: this.state.city,
      state: this.state.state,
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        localStorage.token = response.data.token
        this.setState({ isLoggedIn: true })
      })
      .catch(err => console.log(err))
  }

  handleLogin (e) {
    e.preventDefault()
    axios.post('http://localhost:3001/user/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        localStorage.token = response.data.token
        this.setState({ isLoggedIn: true })
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div className='App'>
        <div className='header'>
          <h1>Roadie</h1>
          <NavBar isLoggedIn={this.state.isLoggedIn} />
        </div>
        <div className='body'>
          <Switch>
            <Route
              path='/home'
              component={Home}
            />

            <Route
              exact
              path='/signup'
              render={(props) => {
                return (
                  <Signup isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />
                )
              }}
            />

            <Route
              exact
              path='/logout'
              render={(props) => {
                return (
                  <Logout isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout} />
                )
              }}
            />
            
            <Route
              exact
              path='/login'
              render={(props) => {
                return (
                  <Login isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogin={this.handleLogin} />
                )
              }}
            />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
