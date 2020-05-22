import React from "react";
import "./App.css";
import { HomePage } from "./HomePage";
import GameContainer from "./Game/GameContainer";
import ResultsContainer from "./Results/ResultsContainer";

export enum pages {
  HomePage,
  GamePage,
  ResultsPage,
}

interface AppState {
  currentPage: pages;
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = { currentPage: pages.HomePage };
  }
  render() {
    return <div className="App">{this.getCurrentScreen()}</div>;
  }

  private getCurrentScreen = (): JSX.Element => {
    switch (this.state.currentPage) {
      case pages.HomePage:
        return <HomePage changePage={this.changeScreen} />;
      case pages.GamePage:
        return <GameContainer changePage={this.changeScreen} />;
      case pages.ResultsPage:
        return <ResultsContainer />;
    }
  };

  private changeScreen = (nextPage: pages) => {
    this.setState({
      currentPage: nextPage,
    });
  };
}

export default App;
