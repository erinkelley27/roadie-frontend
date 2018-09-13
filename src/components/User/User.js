import React, { Component } from 'react'
import axios from 'axios'

class User extends Component {
  // constructor () {
  //   super()
  //   this.state = {
  //     userData: []
  //   }
  // }
  // componentWillMount () {
  //   axios.get('http://localhost:3001/user')
  //     .then(res => {
  //       console.log(res.data)
  //       this.setState({
  //         userData: res.data
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }
  render () {

    return (
      <div className='User'>
        <h2>My Profile!</h2>
      </div>
    )
  }
}

export default User
