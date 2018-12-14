import React, { Component } from "react";
import MapWithMarkers from "./GoogleMapWrapper";
import styled from "styled-components";

const StickyWrapper = styled.div`
  position: relative;
`;

class GoogleMaps extends Component {
  constructor() {
    super();
    this.state = {
      lat: null,
      lng: null,
      zoom: 12,
      loading: true
    };
  }
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
      <StickyWrapper>
        <MapWithMarkers
          center={{ lng, lat }}
          zoom={this.state.zoom}
          meetings={this.props.meetings}
          highlightedMarker={this.props.highlightedMarker}
        />
      </StickyWrapper>
    );
  }
}

export default GoogleMaps;
