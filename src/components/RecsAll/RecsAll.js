import React, { Component } from 'react'
import {Route, Link, Switch} from 'react-router-dom'

class RecsAll extends Component {
  render () {
    let recList = this.props.recData.map(item => {
      return (
        <div className='recLink' key={item.name}>
          <Link to={'/roadierecs/' + item.name}>
            <p className='recName'>{item.name}</p>
            <p className='recLocation'>{item.city}, {item.state}</p>
          </Link>
        </div>
      )
    })
    return (
      <div className='RecsAll'>
        <div>
          <h3>Plan Your Road Trip</h3>
        </div>
        <div className='recList'>
          {recList}
        </div>
      </div>
    )
  }
}

export default RecsAll
