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
        onClick={this.onMapClicked}
        // initialCenter={{ lat: 40.593776590453835, lng: -106.73053157342083 }}
        initialCenter= {this.props.items.length ? { lat: this.props.items[0].lat, lng: this.props.items[0].lng } : { lat: 40.593776590453835, lng: -106.73053157342083 }}
        zoom={10}
      >
          {this.props.items.length > 0 && this.props.items.map((item,index) => (
            
                <Marker key={index} onClick={this.onMarkerClick} 
                    position={{
                        lat: item.lat,
                        lng: item.lng,
                    }}
                    title={item.address}
                    name={item.address}

                />
          ))}
        
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDzDNaY92GGiTMr5zUDaIayLO8LjYjHUGo",
})(MapContainer);
