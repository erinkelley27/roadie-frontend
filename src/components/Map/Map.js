import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lat: this.props.lat,
      lng: this.props.lng
    }
  }

  render () {
    const RecMap = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: this.props.lat, lng: this.props.lng }} defaultZoom={15}
      >
        {props.isMarkerShown && <Marker position={{ lat: this.props.lat, lng: this.props.lng }} />}
      </GoogleMap>
    ))
    return (
      <div className='Map'>
        <RecMap
          isMarkerShown
          containerElement={<div style={{ height: `500px`, width: '500px' }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    )
  }
}

export default Map
