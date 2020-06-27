import React from 'react';
import './App.css';

interface AppState {
  // the todo list represents the state of the component
  list: Array<string>
}

// no propos
class App extends React.Component<{}, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      list: ["Do X", "Do Y", "Do Z"]
    };
  }

  render() {
    return (
      <div className="App">
        <p className="Appheader">My to-do list</p>
        <ul>
          {this.state.list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <form onSubmit={this.submitForm}>
          <input type="text" placeholder="Enter a task" onChange={this.changeInputValue} />
        </form>
      </div>
    );
  }

  // contains the input value in the textbox
  private inputValue = "";

  private changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.inputValue = event.target.value;
  };

  // constraining the type of the event 
  private submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // generate an alert with the valye of the textbox
    alert(this.inputValue);

    // updating the state of the component
    this.setState({
      // Solution 1:
      list: this.state.list.concat(this.inputValue)
    });


    // Solution 2 
    // ES6 with the spread operator
    // this.setState({
    //   list : [...this.state.list, this.inputValue]
    // });

    // Solution 3
    // Later React versions is to use an updater function when modifying 
    // States to prevent race conditions
    // this.setState(prevState => ({
    //  list: [...prevState.list, this.inputValue]
    // }))

    // Common Error 1
    // This is not rendered but the list is updated
    // setState needs to be used
    //this.state.list.push(this.inputValue);
    //console.log(this.state.list);
  };
}


export default App;