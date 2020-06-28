import { increaseAction, decreaseAction } from './actions';
import { CounterAppState, CounterActionsTypes } from './types';

// Reducer
// The reducer is a function that takes the previous 
// state and an action as parameters, and returns the next state. 
// Here the state of the app is defined by a count variable
// 2 actions are present : increase and decrease
// the actions update count

// State of the app
// It is defined by count

const intialState: CounterAppState = { count: 0 }

function counterReducer(state: CounterAppState | undefined, action: CounterActionsTypes) {
    if (state === undefined) {
        return intialState;
    }
    let c = state.count;
    switch (action.type) {
        case increaseAction.type: {
            return { count: c + 1 };
        }
        case decreaseAction.type:
            return { count: c - 1 };
        default:
            return state;
    }
}

export default counterReducer;
