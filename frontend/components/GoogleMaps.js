import React, { Component } from "react";
import MapWithMarkers from "./GoogleMapWrapper";

class GoogleMaps extends Component {
  state = {
    lat: null,
    lng: null,
    zoom: 12,
    loading: true
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        loading: false
      });
    });
  }
  render() {
    const { lng, lat } = this.state;
    console.log(this.props.meetings);
    if (this.state.loading) return <p>Loading ...</p>;
    return (
      <div>
        <MapWithMarkers
          center={{ lng, lat }}
          zoom={this.state.zoom}
          meetings={this.props.meetings}
        />
      </div>
    );
  }
}

export default GoogleMaps;
