import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { ToDoList } from './components/ToDoList/ToDoList';
import { IToDo } from './components/ToDo/ToDo';

export interface AppState {
  todos: IToDo[];
}

export class App extends React.PureComponent<{}, AppState> {
  state: AppState = { todos: [
    { todo: 'Join TNT', isCompleted: true },
    { todo: 'Create basic to-do app', isCompleted: true },
    { todo: 'Add advanced features', isCompleted: false }
  ] };

  public render() {
    return (
      <div className="App">
        <Header onToDoSubmit={this.onTodoSubmit}/>
        <ToDoList {...this.state} toggleTodo={this.toggleTodo}/>
      </div>
    );
  }
 
  private onTodoSubmit = (todoText: string) => {
    this.setState({
      todos: [...this.state.todos, { todo: todoText, isCompleted: false }]
    })
  }

  private toggleTodo = (index: number) => {
    this.setState({
      todos: [
        ...this.state.todos.slice(0, index),
        { ...this.state.todos[index], isCompleted: !this.state.todos[index].isCompleted},
        ...this.state.todos.slice(index+1)
      ]
    })
  }
}