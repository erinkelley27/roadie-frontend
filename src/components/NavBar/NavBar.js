import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

class NavBar extends Component {
  render () {
    if (this.props.isLoggedIn) {
      return (
        <div className='NavBar'>
          <ul>
            <li>
              <Link to='/user/:id' className='nav-link'>My Profile</Link>
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
      return null
    }
  }
}

export default NavBar
