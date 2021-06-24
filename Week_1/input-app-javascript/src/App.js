import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{

  state = {
    name: ""
  }

  // Change the state
  // Listening to a particular event
  onChange = (e) => {
    this.setState({ name: e.currentTarget.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome {this.state.name}
          </p>
          <input type="text" value={this.state.name} onChange={this.onChange} />
        </header>
      </div>
    )
  }
}

export default App;
