import React, { Component } from 'react'
import Map from '../Map/Map'

class RecShow extends Component {
  render () {
    let rec = this.props.recData.find((rec) => rec.name === this.props.match.params.name)
    return (
      <div className='RecShow'>
        <div className='recTitle'>
          <h3>{rec.name}</h3>
        </div>

        <div className='columns'>
          <div className='column1'>
            <div className='recImage'>
              <img src={rec.image} className='rec-img' />
            </div>

            <div className='recContact'>
              <p className='contact'>{rec.address}</p>
              <p className='contact'>{rec.city}, {rec.state} {rec.zip}</p>
              <p className='contact'>{rec.phone}</p>
              <a href={rec.website} target='_blank' className='recSite'><p className='contact'>Web Site</p></a>
            </div>

            <div className='get-directions'>
              <a href='https://www.google.com/maps' target='_blank' className='directions-button'>Get Directions</a>
            </div>
          </div>

          <div className='column2'>
            <div className='recDetails'>
              <p className='menu-item'>Don't leave without trying the {rec.menuItem}!</p>
              <p className='booleans'>Parking: {rec.parking}</p>
              <p className='booleans'>Kid-Friendly: {rec.kids}</p>
              <p className='booleans'>Dog-Friendly: {rec.dogs}</p>
            </div>

            <div className='RecMap'>
              <Map lat={rec.lat} lng={rec.lng} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RecShow
