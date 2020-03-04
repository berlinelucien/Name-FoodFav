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
          <li>{this.inputValue}</li>
        </ul>
        <form onSubmit={this.submitForm}>
          <input type="text" onChange={this.changeInputValue} />
        </form>
      </div>
    );
  }

  private inputValue: string = "pizza";

  private changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.inputValue = event.target.value;
  };

  private submitForm = () => {
    alert(this.inputValue);
  };
}
