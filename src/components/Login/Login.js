import React, { Component } from 'react'

class Login extends Component {
  render () {
    return (
      <div className='Login'>
        <h2>Log In</h2>
        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={this.props.handleInput} />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' onChange={this.props.handleInput} />
          </div>

          <div>
            <input type='submit' value='Submit' onClick={this.props.handleLogin} />
          </div>

          <div>
            <p>Not a Roadie yet? <a href='/signup'>Sign Up</a></p>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
