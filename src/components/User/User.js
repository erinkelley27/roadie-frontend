import React, { Component } from 'react'
import axios from 'axios'

class User extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userData: []
    }
  }

  componentDidMount () {
    axios.get('https://roadie-recs.herokuapp.com/user')
      .then(res => {
        console.log(res.data)
        console.log(this.props.user_id)
        this.setState({
          userData: res.data
        })
        console.log(this.state.userData)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    // let user = this.state.userData.find((user) => user._id === this.props.match.params.id)
    return (
      <div className='User'>
        <h2>Welcome, User!</h2>
      </div>
    )
  }
}

export default User
