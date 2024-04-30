// MapComponent.jsx
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Polyline } from 'google-maps-react';

class MapComponent extends Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '400px',
    };

    const coordinates = [
      { lat: 12.9141, lng: 74.856 },
      { lat: 12.9265, lng: 74.8422 },
      { lat: 12.9442, lng: 74.8423 },
      // Add more coordinates as needed
    ];

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 12.9141, lng: 74.856 }}
      >
        <Polyline
          path={coordinates}
          strokeColor="#FF0000"
          strokeOpacity={0.8}
          strokeWeight={2}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
})(MapComponent);
