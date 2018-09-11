import React, { Component } from 'react'

class Signup extends Component {
  render () {
    return (
      <div className='Signup'>
        <h2>Sign Up</h2>
        <form>
          <div>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' name='firstName' onChange={this.props.handleInput} />
          </div>

          <div>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' name='lastName' onChange={this.props.handleInput} />
          </div>

          <div>
            <label htmlFor='city'>City</label>
            <input type='text' name='city' onChange={this.props.handleInput} />
          </div>

          <div>
            <label htmlFor='state'>State</label>
            <input type='text' name='state' onChange={this.props.handleInput} />
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
            <input type='submit' value='Submit' onClick={this.props.handleSignup} />
          </div>

          <div>
            <p>Already a Roadie? <a href='/login'>Log In</a></p>
          </div>

        </form>
      </div>
    )
  }
}

export default Signup
