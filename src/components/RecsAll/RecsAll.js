import React, { Component } from 'react'
import {Route, Link, Switch} from 'react-router-dom'

class RecsAll extends Component {
  render () {
    let recList = this.props.recData.map(item => {
      return (
        <div className='recLink' key={item.name}>
          <h4><Link to={'/roadierecs/' + item.name}>{item.name}</Link></h4>
          <p>{item.city}, {item.state}</p>
        </div>
      )
    })
    return (
      <div className='RecsAll'>
        <div>
          <h3>I'm pass through...</h3>
        </div>
        <div className='recList'>
          {recList}
        </div>
      </div>
    )
  }
}

export default RecsAll
