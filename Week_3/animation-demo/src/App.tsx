import React from "react";
import './App.css';
import {ShakeImage} from './components/ShakeImage'
import RevealView from './components/RevealView'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShakeImage />
      </header>
      <RevealView />
    </div>
  );
}

export default App;
