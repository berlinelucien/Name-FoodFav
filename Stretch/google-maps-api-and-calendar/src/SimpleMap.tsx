import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow, StandaloneSearchBox } from '@react-google-maps/api';
import './MyDemo.css'

const containerStyle = {
    height: '70vh',
    width: '100%',
 };
 
 //constant for markers labels names
 const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

 //icons database
 const iconBase =
            "https://developers.google.com/maps/documentation/javascript/examples/full/images/";

const icons = {
          parking: {
            icon: iconBase + 'parking_lot_maps.png'
          },
          library: {
            icon: iconBase + 'library_maps.png'
          },
          info: {
            icon: iconBase + 'info-i_maps.png'
          },
          beach:{
            icon: iconBase + 'beachflag.png'
          }
        };
//App States Types
interface defaultPosition{
  lat:number,
  lng:number
}
interface places{
  position:defaultPosition
  id: number,
  name: string,
  description: string,
  imgSrc:any,
  address:string,
  moreInfo:string,
  type:string,
}
interface IState{
  center:defaultPosition,
  defaultZoom:number,
  infoFlag: boolean,
  places: Array<places>, //
  myInfoWindow?: places, //the last marker clicked in the array, infoWindow gets updated.
}


class SimpleMap extends Component<{}, IState> {
  constructor(props: any, state: IState){
  super(props, state);
  this.state = {
    center:{
      lat: 47.6062,
      lng: -122.3321
  },
  defaultZoom:12,
  infoFlag:false,
  // App Places Data to render on the map
  places:[
    {
      id: 1, 
      position: { 
        lat: 47.6070, 
        lng: -122.3418 
      }, 
      name: "Waterfront Park", 
      description: "Waterfront Park is a public park on the Central Waterfront, Downtown, Seattle, Washington, USA. Designed by the Bumgardner Partnership and consultants, it was constructed on the site of the former Schwabacher Wharf.",
      imgSrc:"https://www.touropia.com/gfx/d/tourist-attractions-in-seattle/seattle_downtown_waterfront.jpg?v=1", 
      address:"1401 Alaskan Way, Seattle, WA 98101",
      moreInfo:"https://en.wikipedia.org/wiki/Waterfront_Park_(Seattle)",
      type:'info'
    },
    {
      id: 2, 
      position: { 
        lat: 47.6205, 
        lng: -122.3493 }, 
        name:"Space Needle", 
        description: "Built for the 1962 Seattle World’s Fair, the Space Needle has come to symbolize the Emerald City more than anything else. At 605 feet (184 meters) tall, it dominates Seattle’s skyline. A revolving observation tower sits at 520 feet above the ground, offering ever-changing views of Seattle for miles around, including Puget Sound and the far-off Olympic Mountains. A revolving restaurant is on a lower level. Sunset is a good time to ride the elevator, which climbs at the speed of 10 miles per hour, to the top to see a twinkling Seattle below.", 
        imgSrc:"https://cdn1.iconfinder.com/data/icons/landmarks-of-the-usa-2/128/USA_Seattle-Space_Needle-512.png",
        address:"400 Broad St, Seattle, WA 98109",
        moreInfo:"https://www.spaceneedle.com/plan-your-visit",
        type:'beach'

    },
  ]
};
};

  render() {
    let infoWindow;
    if (this.state.infoFlag) {
      infoWindow =
        <InfoWindow
          onLoad={this.onLoad}
          onCloseClick={() => { this.setState({ infoFlag: false }) }} //Keeps infoWindow closed before Click
          position={this.state.myInfoWindow?.position} //Puts infoWindow on location position {lng and lat }
        >
          {/* Show selected Data on the info window */}
          <div style={{backgroundColor: 'pink', opacity: 1, padding:3 }}>
          <p><b>{this.state.myInfoWindow?.name}</b></p>
          <p> { <p><img src={this.state.myInfoWindow?.imgSrc}/></p>}</p>

            <p><a href={this.state.myInfoWindow?.imgSrc}>Learn More</a></p>
            <p>{this.state.myInfoWindow?.address}</p>
          </div>
        </InfoWindow>;
    } 
    else 
    {
      infoWindow = null;
    }
    return (
      <div className='demo-app'>
        <div className="demo-app-sidebar">
        <h2>Google Maps API Demo Instructions</h2>
        <ul>
        <li>Please click on the location name to see on the map</li>
        </ul>
        <ol>
        {this.state.places.map(loc => (
          <li onClick={()=>this.onClickChange(loc.position)}><h2><span><b>{loc.name}</b></span><br/> </h2>
             { <p><img src={loc.imgSrc}/></p>}
           <p>{loc.address}</p>
          </li>
           ))}
        </ol>
         </div>

    <div className='demo-app-main'>
     <div className="containerStyle">
      <LoadScript
        googleMapsApiKey="Insert Your API Key here"
        language='en'
        libraries={["places"]}
          >     
            <GoogleMap 
             mapContainerStyle={containerStyle}
             center={this.state.center}
             zoom={this.state.defaultZoom}
             onClick={this.onClickChange}
              >
                {/* { /* Child components, such as markers, info windows, etc. */ }

                {/* loop for all my places and set a marker component */}
               {this.state.places.map(myPlace => (
                   // console.log(icons[myPlace.type]);
                    <Marker 
                    label={labels[myPlace.id-1]}
                    // @ts-ignore
                    // icon={icons[myPlace.type].icon}
                    key={myPlace.id}
                    onLoad={this.onLoad}
                    position={myPlace.position}
                    onClick={() => { this.updatePlace(myPlace) }} 
                     /> 
                     )) }
          {/* Show my info window instant */}
          {infoWindow}
           </GoogleMap>
       </LoadScript>
       </div>
     </div>
    </div>
  )
  }
  onLoad = (marker:any) => {
    console.log('marker: ', marker)
  }
  infOnLoad = (infoBox:any) => {
    console.log('InfoBox: ', infoBox)
  }
  updatePlace = (newLoc: places) => {
    this.setState({ myInfoWindow: newLoc, infoFlag: true }); // myInfoWindow to the value of the current marker
  }
 
 // when onClick name location update the state center value and zoom in
 onClickChange= (locPosition:defaultPosition) => {
  this.setState(state => ({
        center: {                   // object that we want to update
          ...state.center,       // keep all other key-value pairs
          lat: locPosition.lat,
          lng: locPosition.lng      // update the value of specific key
        },
        defaultZoom:16,
        infoFlag:state.infoFlag,
        places:state.places
        
    }))
    console.log("my new center is"+ this.state.center.lat +" "+ this.state.center.lng)
  };
}
export default SimpleMap;