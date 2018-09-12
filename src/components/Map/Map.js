import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {
  render () {
    const RecMap = withGoogleMap(props => (
      <GoogleMap defaultCenter={{ lat: 40.756795, lng: -73.954298 }} defaultZoom={13}>
        {props.isMarkerShown && <Marker position={{ lat: 40.756795, lng: -73.954298 }} />}
      </GoogleMap>
    )
    )
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
