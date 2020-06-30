import { ADD, COMPLETE } from './actions';
import { ToDoAppState /*CounterActionsTypes*/ } from './types';

// Reducer
// The reducer is a function that takes the previous 
// state and an action as parameters, and returns the next state. 
// Here the state of the app is defined by a count variable
// 2 actions are present : increase and decrease
// the actions update count

// State of the app
// It is defined by count

const intialState: ToDoAppState = { items: ["A", "B", "C"] }

var itemID = 1; // increase by 1 every time we add a new todo item

function todoReducer(state: ToDoAppState | undefined, action: any): ToDoAppState {
    if (state === undefined) {
        return intialState;
    }

    let listOfItems = state.items;
    switch (action.type) {
        case ADD: {
            return { items: listOfItems.concat(action.description) };
        }
        case COMPLETE:
            return { items: listOfItems }; // Not done yet :)
        default:
            return state;
    }
}

export default todoReducer;
