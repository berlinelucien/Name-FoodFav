import React from 'react';
import './App.css';
import CounterDisplay from './components/CounterDisplay';
import CounterChanger from './components/CounterChanger';

///////////////////////////////////////////////////////////////////////////////
//  NOTE: 
//  
//  There's another branch ("SplitStateAndContext") that has a similar varsion,
//  except that it splits up the app's state and the context
//
///////////////////////////////////////////////////////////////////////////////


// Updating the context from a subcomponent:
// https://reactjs.org/docs/context.html#updating-context-from-a-nested-component

// Tutorial blog post:
// https://www.robinwieruch.de/react-context

interface ICounterState {
  count: number;
  changeBy: (amt: number) => void;
}

export const CounterContext = React.createContext<ICounterState>(undefined!);

// Store is a prop of the Provider component
// Provider is the outermost component of the app to help
// ensure that every component has access
/// to the Redux store and functionality 
// The <Provider /> makes the Redux store available to any nested 
// components that have been wrapped in the connect() function

class App extends React.Component<{}, ICounterState>{

  constructor(props: any) {
    super(props);

    let fnxChangeBy = (amt: number) => {

      this.setState((state: ICounterState): ICounterState => {
        return { ...state, count: state.count + amt }
      });
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      count: 0,
      changeBy: fnxChangeBy,
    };
  }
  render() {
    return (
      <CounterContext.Provider value={this.state}>
        <div className="root"><CounterDisplay /><CounterChanger /></div>
      </CounterContext.Provider >)
  }
}

export default App;