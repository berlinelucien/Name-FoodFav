import { ADD, COMPLETE } from './actions';
import { ToDoItem, ToDoAppState /*CounterActionsTypes*/ } from './types';

// Reducer
// The reducer is a function that takes the previous 
// state and an action as parameters, and returns the next state. 
// Here the state of the app is defined by a count variable
// 2 actions are present : increase and decrease
// the actions update count

// State of the app
// It is defined by count

const firstItem = new ToDoItem(1, "A");
const secondItem = new ToDoItem(2, "B");

const intialState: ToDoAppState = {
    idCounter: 3, // this is the id assigned to the next object that we create
    items: [firstItem, secondItem]
}

function todoReducer(state: ToDoAppState | undefined, action: any): ToDoAppState {
    if (state === undefined) {
        return intialState;
    }

    let nextId = state.idCounter;
    let listOfItems = state.items;
    switch (action.type) {
        case ADD: {
            return {
                items: listOfItems.concat(new ToDoItem(nextId, action.description)),
                idCounter: nextId + 1
            };
        }
        // case COMPLETE:
        //     return { items: listOfItems }; // Not done yet :)
        default:
            return state;
    }
}

export default todoReducer;
