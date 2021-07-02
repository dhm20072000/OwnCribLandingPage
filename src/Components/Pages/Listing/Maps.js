import React, { Component } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";


export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={{
            lat: this.props.detail.lat,
            lng: this.props.detail.lng,
        }}
        onClick={this.onMapClicked}
      >
        <Marker onClick={this.onMarkerClick}
            position={{
                lat: this.props.detail.lat,
                lng: this.props.detail.lng,
            }}
            title={this.props.detail.address}
            name={this.props.detail.address}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1  style={{fontSize: '15px',fontWeight: '600'}}>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDzDNaY92GGiTMr5zUDaIayLO8LjYjHUGo",
})(MapContainer);
