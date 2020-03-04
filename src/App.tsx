import React from "react";
import "./App.css";

interface AppState {
  list: Array<string>;
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      list: ["apples", "oranges", "pears"]
    };
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((value: string, index: number) => {
            return <li>{value}</li>;
          })}
        </ul>
      </div>
    );
  }
}
