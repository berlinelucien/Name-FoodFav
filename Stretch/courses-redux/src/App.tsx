import React from "react";
import "./App.css";
import { SignInPage } from "./SignInPage";
import { MainPage } from "./MainPage";

export enum pages {
  SignInPage,
  MainPage, 
}

interface AppState {
  currentPage: pages;
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = { currentPage: pages.SignInPage }; // start out on the page I'm testing.  I'm 100% sure I'll forget to put this back :/
  }

  render() {
    return <div className="App">{this.getCurrentScreen()}</div>;
  }

  private getCurrentScreen = (): JSX.Element => {
    switch (this.state.currentPage) {
      case pages.SignInPage:
        return <SignInPage changePage={this.changeScreen} />;
      case pages.MainPage:
        return <MainPage changePage={this.changeScreen} />;
      default:
        return <div>Error. I am not sure where to go from here!</div>;
    }
  };

  private changeScreen = (nextPage: pages) => {
    this.setState((state: AppState, props: any) => ({
      currentPage: nextPage
    }));
  };
}

export default App;


