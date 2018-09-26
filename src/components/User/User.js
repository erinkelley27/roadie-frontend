import React, { Component } from 'react'

class User extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userData: []
    }
  }
  render () {
    return (
      <div className='User'>
        <h2>Welcome, User!</h2>
      </div>
    )
  }
}

export default User
