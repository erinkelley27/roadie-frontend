import React, { Component } from 'react'
import {Route, Link, Switch} from 'react-router-dom'

class Login extends Component {
  render () {
    return (
      <div className='Login'>
        <form>
          <div>
            <h2>Log In</h2>
          </div>

          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={this.props.handleInput} />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' onChange={this.props.handleInput} />
          </div>

          <div>
            <Link to='/home'><input type='submit' value='Submit' className='submit' onClick={this.props.handleLogin} /></Link>
          </div>

          <div>
            <p>Not a Roadie yet? <a href='/signup' className='auth-form-link'>Sign Up</a></p>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
