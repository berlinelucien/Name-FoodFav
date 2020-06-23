import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component<
  { // no props
  },
  {
    // state
    name: string;
  }
  > {
  state = {
    // text currently in input / textbox
    name: "",
  };

  // one way to write onChange
  // typing on RIGHT hand side of =
  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    // Change the state
    // Listening to a particular event
    this.setState({ name: e.currentTarget.value });
  };

  // other way to write onChange
  // typing on LEFT hand side of =
  // onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  //  this.setState({name: e.currentTarget.value})
  // }

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
    );
  }
}

export default App;
