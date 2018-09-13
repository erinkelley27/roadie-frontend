import React, { Component } from 'react'
// import { compose, withProps } from 'recompose'
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
    //     const RecMap = compose(
    //       withProps({
    //         googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCXi-sG9aWID3-mYsQH4sp06FkuDx9bT8U&v=3.exp&libraries=geometry,drawing,places',
    //         loadingElement: <div style={{ height: `100%` }} />,
    //         containerElement: <div style={{ height: `500px`, width: '100%' }} />,
    //         mapElement: <div style={{ height: `100%` }} />
    //       }),
    //       withScriptjs,
    //       withGoogleMap
    //     )((props) =>
    //       <GoogleMap
    //         defaultZoom={15}
    //         defaultCenter={{ lat: this.props.lat, lng: this.props.lng }}
    //       >
    //         {props.isMarkerShown && <Marker position={{ lat: this.props.lat, lng: this.props.lng }} />}
    //       </GoogleMap>
    //     )
    //     return (
    //       <div className='RecMap'>
    //         <RecMap
    //           isMarkerShown
    //         />
    //       </div>
    //     )
    //   }
    // }

    const RecMap = withScriptjs(withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: this.props.lat, lng: this.props.lng }} defaultZoom={15}
      >
        {props.isMarkerShown && <Marker position={{ lat: this.props.lat, lng: this.props.lng }} />}
      </GoogleMap>
    )))
    return (
      <div className='Map'>
        <RecMap
          isMarkerShown
          googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCXi-sG9aWID3-mYsQH4sp06FkuDx9bT8U&v=3.exp&libraries=geometry,drawing,places'
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `500px`, width: '100%' }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    )
  }
}

export default Map
