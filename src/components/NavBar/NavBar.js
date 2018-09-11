import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

class NavBar extends Component {
  render () {
    return (
      <div className='NavBar'>
        <ul>
          <li>
            <Link to='/user/:id'>My Profile</Link>
          </li>
          <li>
            <Link to='/recs'>Roadie Recs</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBar
