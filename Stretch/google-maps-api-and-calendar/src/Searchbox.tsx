import React, { Component } from 'react';
import { GoogleMap, StandaloneSearchBox, LoadScript,StreetViewPanorama , Marker, InfoBox, InfoWindow, useGoogleMap } from '@react-google-maps/api';

let google: any
const mapContainerStyle = {
    height: "400px",
    width: "800px"
  };
  
  const center = {
    lat: 38.685,
    lng: -115.234
  };

  export class SearchBox extends Component<{}> {
    searchBox: any;
    placeholder=center.lng.toString
    render() {
      return (
      
      <LoadScript
        googleMapsApiKey="Insert Your API Key here"
        libraries={["places"]}
      >
      <GoogleMap
      id="searchbox-example"
      mapContainerStyle={mapContainerStyle}
      zoom={2.5}
      center={center}
       >
        <StandaloneSearchBox
        onLoad={this.onLoad}
        onPlacesChanged={this.onPlacesChanged}
       
      >
   
        <input
         id="searchbox"
          type="text"
          placeholder="Customized your placeholder"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
            position: "absolute",
            left: "50%",
            marginLeft: "-120px"
          }}
        />
      </StandaloneSearchBox>
      
    </GoogleMap>
  </LoadScript>
      )
    }
    onLoad = (ref:any) =>{ this.searchBox = ref; console.log('when load'+ this.searchBox+ ref)};

    onPlacesChanged = () => {console.log(this.searchBox.getPlaces())
     
  };


}