import React from "react";
import "./App.css";
import { SignupPage } from "./SignupPage";
import { WelcomePage } from "./WelcomePage";
import { AddItemPage } from "./AddItemPage";
import { CommunityPage } from "./CommunityPage";

export enum pages {
  SignupPage,
  WelcomePage,
  CommunityPage,
  BorrowPage,
  AddItemPage,
}

interface AppState {
  currentPage: pages;
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = { currentPage: pages.SignupPage }; // start out on the page I'm testing.  I'm 100% sure I'll forget to put this back :/
  }
  render() {
    return <div className="App">{this.getCurrentScreen()}</div>;
  }

  private getCurrentScreen = (): JSX.Element => {
    switch (this.state.currentPage) {
      case pages.SignupPage:
        return <SignupPage changePage={this.changeScreen} />;
      case pages.WelcomePage:
        return <WelcomePage changePage={this.changeScreen} />;
      case pages.CommunityPage:
        return <CommunityPage changePage={this.changeScreen} />;
      case pages.AddItemPage:
        return <AddItemPage changePage={this.changeScreen} />;
      default:
        return <div>ERROR</div>;
    }
  };

  private changeScreen = (nextPage: pages) => {
    this.setState((state, props) => ({
      currentPage: nextPage
    }));
  };
}

export default App;


