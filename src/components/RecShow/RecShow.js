import React, { Component } from 'react'
import Map from '../Map/Map'

class RecShow extends Component {
  render () {
    let rec = this.props.recData.find((rec) => rec.name === this.props.match.params.name)
    return (
      <div className='RecShow'>
        <h4>{rec.name}</h4>
        <p>{rec.address}</p>
        <p>{rec.city}, {rec.state} {rec.zip}</p>
        <p>{rec.website}</p>
        <p>{rec.phone}</p>
        <div className='RecMap'>
          <Map />
        </div>
      </div>
    )
  }
}

export default RecShow
