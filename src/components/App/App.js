import React, { Component } from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import axios from 'axios'
import '../../index.css'

import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Logout from '../Logout/Logout'
import RecsAll from '../RecsAll/RecsAll'
import RecShow from '../RecShow/RecShow'
import User from '../User/User'

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
      isLoggedIn: false,
      recData: [],
      user_id: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentWillMount () {
    axios.get('http://localhost:3001/roadierecs')
      .then(res => {
        console.log(res.data)
        this.setState({
          recData: res.data
        })
        console.log(this.state.recData)
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount () {
    console.log(localStorage.token)
    console.log(localStorage.user_id)
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true,
        user_id: localStorage.user_id
      })
    } else {
      this.setState({
        isLoggedIn: false,
        user_id: ''
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
        localStorage.user_id = response.data.user_id
        this.setState({
          isLoggedIn: true,
          user_id: response.data.user_id
        })
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
        localStorage.user_id = response.data.user_id
        this.setState({
          isLoggedIn: true,
          user_id: response.data.user_id
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div className='App'>
        <div className='header'>
          <img src='https://media.giphy.com/media/2rpDGeo2ymlXO/giphy.gif' alt='Roadie' />
          <h1><a href='/'>Roadie</a></h1>
        </div>
        <div className='nav'>
          <NavBar isLoggedIn={this.state.isLoggedIn} user_id={this.state.user_id} />
        </div>
        <div className='body'>
          <Switch>
            <Route
              exact
              path='/'
              component={Home}
            />

            <Route
              exact
              path='/signup'
              render={(props) => {
                return (
                  <Signup isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignup={this.handleSignup} />
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

            <Route
              exact
              path='/roadierecs'
              render={routerProps => (
                <RecsAll {...routerProps} {...this.state} />
              )}
            />

            <Route
              exact
              path='/roadierecs/:name'
              render={routerProps => (
                <RecShow {...routerProps} {...this.state} />
              )}
            />

            <Route
              exact
              path={'/user/' + this.state.user_id}
              render={routerProps => (
                <User {...routerProps} {...this.state} />
              )}
            />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
