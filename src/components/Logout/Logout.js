import React, { Component } from 'react'

class Logout extends Component {
  render () {
    return (
      <div className='Logout'>
        <h2>Log Out</h2>
        <form>
          <div>
            <input type='submit' value='Log Out' onClick={this.props.handleLogout} />
          </div>
        </form>
      </div>
    )
  }
}

export default Logout
