import React from "react";
import "./App.css";

interface AppState {
  list: Array<string>;
}

interface AppProps {
  list: Array<string>
  addListItem: (item: string) => void;
}

export class App extends React.Component<AppProps, AppState> {
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
          {this.props.list.map((value: string, index: number) => {
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
    this.props.addListItem(this.inputValue);
  };
}
