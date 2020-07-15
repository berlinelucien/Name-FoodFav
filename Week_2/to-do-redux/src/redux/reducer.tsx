import { actionIdentifier, TodoActions, AddAction, ToggleAction } from './actions'
import { ToDoItem, ToDoAppState } from './types';

// Reducer
// The reducer is a function that takes the previous 
// state and an action as parameters, and returns the next state. 
// Here the state of the app is defined by a count variable
// 2 actions are present : increase and decrease
// the actions update count

// State of the app
// It is defined by count

const firstItem = new ToDoItem(1, "Get food for dinner");
const secondItem = new ToDoItem(2, "Finish up homework for class");

const intialState: ToDoAppState = {
    idCounter: 3, // this is the id assigned to the next object that we create
    items: [firstItem, secondItem]
}

function todoReducer(state: ToDoAppState | undefined, action: TodoActions): ToDoAppState {
    if (state === undefined) {
        return intialState;
    }

    let nextId = state.idCounter;
    let listOfItems = state.items;
    switch (action.type) {
        case actionIdentifier.Add: {
            let addAction = action as AddAction;
            return {
                items: listOfItems.concat(new ToDoItem(nextId, addAction.description)),
                idCounter: nextId + 1
            };
        }
        case actionIdentifier.Toggle:
            let toggleAction = action as ToggleAction;
            let id = toggleAction.id;
            listOfItems = listOfItems.slice(0);
            let itemIdx = listOfItems.findIndex(item => item.id === id);
            if (itemIdx !== -1) {
                listOfItems[itemIdx].completed = !listOfItems[itemIdx].completed;
            }
            let newState = {
                items: listOfItems,
                idCounter: state.idCounter
            };
            return newState;

        default:
            return state;
    }
}

export default todoReducer;
