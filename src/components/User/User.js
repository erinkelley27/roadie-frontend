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
        <h2>{this.props.user_id}</h2>
      </div>
    )
  }
}

export default User
