import React from "react";
import { pages } from "./App";

interface HomeScreenProps {
  changePage: (page: pages) => void;
}
export class HomePage extends React.Component<HomeScreenProps> {
  render() {
    return (
      <div>
        <p onClick={this.props.changePage.bind(this, pages.GamePage)}>
          New Game
        </p>
        <p onClick={this.props.changePage.bind(this, pages.ResultsPage)}>
          Results
        </p>
      </div>
    );
  }
}
