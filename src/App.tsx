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
            return <li key={index}>{value}</li>;
          })}
        </ul>
        <form onSubmit={this.submitForm}>
          <input type="text" onChange={this.changeInputValue} />
        </form>
      </div>
    );
  }

  private inputValue: string = "";

  private changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.inputValue = event.target.value;
  };

  private submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newList: Array<string> = Object.assign([], this.state.list);
    newList.push(this.inputValue);
    this.setState({
      list: newList
    });
  };
}
