import React from "react";
import "./App.css";
import { listenerCount } from "process";

interface AppState {
  list: Array<string>;
  //addListItem: (item: string) => void;
}

export class App extends React.Component<null, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      list: ["apples", "oranges", "pears"],
    }
  };

  render() {
    console.log("this.state.list:")
    console.log(this.state.list);
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

    var new_list = this.state.list.concat([this.inputValue]);
    var new_state = { list: new_list }
    this.setState(new_state);
  };
}
