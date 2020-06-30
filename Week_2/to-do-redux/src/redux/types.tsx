// State of the app
//import { increaseAction, decreaseAction } from './actions';
//export type CounterActionsTypes = typeof decreaseAction | typeof increaseAction;


export interface IToDoItem {
  id: number,
  description: string,
  completed: boolean
}

export class ToDoItem implements IToDoItem {
  id: number;
  description: string;
  completed: boolean;

  constructor(_id: number, _desc: string) {
    this.id = _id;
    this.description = _desc;
    this.completed = false;
  }
}

export interface ToDoAppState {
  idCounter: number,
  items: Array<IToDoItem>
}

export default ToDoAppState;

