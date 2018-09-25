import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

class NavBar extends Component {
  render () {
    if (this.props.isLoggedIn) {
      return (
        <div className='NavBar'>
          <ul>
            <li>
              <Link to={'/user/' + this.props.user_id} className='nav-link'>My Profile</Link>
            </li>
            <li>
              <Link to='/roadierecs' className='nav-link'>Roadie Recs</Link>
            </li>
            <li>
              <Link to='/logout' className='nav-link'>Log Out</Link>
            </li>
          </ul>
        </div>
      )
    } else {
      return (
        <div className='NavBar'>
          <ul>
            <li>
              <Link to='/signup' className='nav-link'>Sign Up</Link>
            </li>
            <li>
              <Link to='/login' className='nav-link'>Log In</Link>
            </li>
          </ul>
        </div>
      )
    }
  }
}

export default NavBar
