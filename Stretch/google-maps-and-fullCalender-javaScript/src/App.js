import React from 'react';
import './App.css';
import SimpleMap from "./SimpleMap";
import Calendar from "./Calendar"

function App() {
  return (
    <div className="App">
      <h1>Welcome to Google Maps API</h1>
        <h1>& FullCalender Demo</h1>
        <p></p>
      <div className="containerStyle">
      <SimpleMap/>
      <Calendar/>
      {/* <div><h3>This is my map with search box</h3></div>
      <SearchBox/> */}
      </div>
    </div>
  );
}

export default App;
