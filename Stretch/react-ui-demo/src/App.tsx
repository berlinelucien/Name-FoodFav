import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';

import MainNav from './components/MainNav';
import {DataChart} from './components/DataChart';
import TransferList from './components/TransferList';
import {CommentDemo} from './components/Comment';

export enum pages {
  Main,
  Button,
  Data,
  TransferList,
  Comment
}
interface AppState {
  currentPage: pages;
  isLoading: boolean;
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = { 
      currentPage: pages.Button,
      isLoading : false
     }
  }

  render() {
    return (
      <div className="App">
        <MainNav changePage={this.changeScreen}/>
        <header className="App-header">
          <div>{this.getCurrentScreen()}</div>
        </header>
      </div>
    );
  }

  private getCurrentScreen = (): JSX.Element => {
    switch (this.state.currentPage) {
      case pages.Main:
        return  <p>Use the Navigation above to explore UI Components</p>;
        case pages.Button:
          return <Button variant="primary" size="sm" className="">Humble Button</Button>
      case pages.Data:
        return <DataChart />;
      case pages.TransferList:
        return <TransferList />;
      case pages.Comment:
        return <CommentDemo />;
      default:
        return <div>ERROR</div>;
    }
  };  

  private changeScreen = (nextPage: pages) => {
    this.setState((state, props) => ({
      currentPage: nextPage
    }));
  }

}

export default App;
