import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList'
import AddToDoItem from './components/AddToDoItem'
import ShowCount from './components/ShowCount'

// no propos
class App extends React.Component<{}, {}> {

  render() {
    return (
      <div className="App">
        <h1>ToDo List App!</h1>
        <ShowCount />
        <h3>Here are your items:</h3>
        <ToDoList />
        <b>Enter A New Task Here:</b>
        <AddToDoItem />
      </div>
    );
  }
};

export default App;