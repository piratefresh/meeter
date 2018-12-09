import React, { Component } from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  InfoWindow
} from "react-google-maps";
import { compose, withProps, withStateHandlers } from "recompose";
const MapStyles = require("./MapStyles.json");

const MapWithMeetings = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC-syviZl4VJqqgBlhXxTu4_s3cnXEajDY&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div style={{ height: "50vh", width: "100%", padding: "50px" }} />
    ),
    mapElement: <div style={{ height: "100%" }} />
  }),
  withStateHandlers(
    props => ({
      infoWindows: props.meetings.map(p => {
        return { isOpen: false };
      })
    }),
    {
      onToggleOpen: ({ infoWindows }) => selectedIndex => ({
        infoWindows: infoWindows.map((iw, i) => {
          iw.isOpen = selectedIndex === i;
          return iw;
        })
      })
    }
  ),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.center}
    defaultOptions={{ styles: MapStyles }}
  >
    {props.meetings &&
      props.meetings.map((meeting, i) => {
        console.log(meeting);
        let lat = meeting.lat;
        let lng = meeting.lng;

        return (
          <Marker
            id={meeting.id}
            key={meeting.id}
            position={{ lat: lat, lng: lng }}
            title="Click to zoom"
            onClick={props.onToggleOpen.bind(this, i)}
          >
            {props.infoWindows[i].isOpen && (
              <InfoWindow onCloseClick={props.onToggleOpen.bind(i)}>
                <div>
                  <h2>{meeting.title}</h2>
                  <p>{meeting.description}</p>
                </div>
              </InfoWindow>
            )}
          </Marker>
        );
      })}
  </GoogleMap>
));

export default MapWithMeetings;
