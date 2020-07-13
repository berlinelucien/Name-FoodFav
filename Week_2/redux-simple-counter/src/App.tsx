import React from 'react';
import './App.css';
import Counter from './components/Counter';

// Entry point component
// Show the counter component

class App extends React.Component<{}, {}>{
  render() {
    return (<Counter />)
  }
}

export default App;