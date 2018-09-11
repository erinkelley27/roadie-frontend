import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

class NavBar extends Component {
  render () {
    if (this.props.isLoggedIn) {
      return (
        <div className='NavBar'>
          <ul>
            <li>
              <Link to='/user/:id'>My Profile</Link>
            </li>
            <li>
              <Link to='/roadierecs'>Roadie Recs</Link>
            </li>
            <li>
              <Link to='/logout'>Log Out</Link>
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
