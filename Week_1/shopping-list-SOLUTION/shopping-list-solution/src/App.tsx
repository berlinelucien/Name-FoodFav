import React from 'react';
import './App.css';

class ShoppingItem {
  public name = "";
  public price = 0.0;
}

interface AppState {
  items: Array<ShoppingItem>;
}

class App extends React.Component<{}, AppState> {

  constructor(props: any) {
    super(props);

    const pizza: ShoppingItem = {
      name: "Pizza",
      price: 4.5
    }
    const pad_see_eew: ShoppingItem = {
      name: "Phad See Eew",
      price: 8
    }

    this.state = {
      items: [pizza, pad_see_eew]
    };
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Shopping List App!</h1>
        </header>
        <p>This shopping app rulez, the other droolz!</p>
        <ol>
          {this.state.items.map(item => (
            <li key={item.name}>{item.name}  ${item.price}</li>
          ))}
        </ol>
        <form onSubmit={this.submitForm}>
          <input type="text" placeholder="Enter the item's name" onChange={this.changeName} />
          <input type="text" placeholder="Enter the item's price" onChange={this.changePrice} />

          <input type="submit" />
        </form>
      </div>
    );
  }

  private inputName = "";

  private changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.inputName = event.target.value;
  };

  // contains the input value in the textbox
  private inputPrice = "";

  private changePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.inputPrice = event.target.value;
  };

  // constraining the type of the event 
  private submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // generate an alert with the valye of the textbox
    alert("name: " + this.inputName + "\nPrice: " + this.inputPrice);

    // // updating the state of the component
    const newItem: ShoppingItem = { name: this.inputName, price: parseFloat(this.inputPrice) }
    this.setState({
      // Solution 1:
      items: this.state.items.concat(newItem)
    });
  };
}

export default App;