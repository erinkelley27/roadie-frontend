import React, { Component } from 'react'
import {Route, Link, Switch} from 'react-router-dom'

class Logout extends Component {
  render () {
    return (
      <div className='Logout'>
        <form>
          <div>
            <h2>Log Out</h2>
          </div>
          <div>
            <Link to='/signup'><input type='submit' value='Log Out' className='submit' onClick={this.props.handleLogout} /></Link>
          </div>
        </form>
      </div>
    )
  }
}

export default Logout
