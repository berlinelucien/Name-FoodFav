import React from 'react';
import './App.css';
import CounterDisplay from './components/CounterDisplay';
import CounterChanger from './components/CounterChanger';

// Entry point component

class App extends React.Component<{}, {}>{
  render() {
    return (<div className="root"><CounterDisplay /><CounterChanger /></div>)
  }
}

export default App;