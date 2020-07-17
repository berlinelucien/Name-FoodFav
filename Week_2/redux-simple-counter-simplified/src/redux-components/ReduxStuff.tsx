
export interface CounterAppAction {
    type: string; // at this point only "CHANGE" is supported
    by: number; // 1 to increase by 1, -5 to decrease by 5, etc
}

// This will make it easier to create action objects
// and eliminates the error of a typo for "CHANGE"
export function createChangeAction(changeBy: number): CounterAppAction {
    let actionObject = {
        type: "CHANGE",
        by: changeBy
    }
    return actionObject;
}

// Reducer
// The reducer is a function that takes the previous 
// state and an action as parameters, and returns the next state. 
// Here the state of the app is defined by a count variable
// 2 actions are present : increaseAction and decreaseAction

// State of the app
// Interface for the state of the app (store)
export interface CounterAppState {
    count: number
}
const intialState: CounterAppState = { count: 0 }

function counterReducer(state: CounterAppState | undefined, action: CounterAppAction): any {
    if (state === undefined) {
        return intialState;
    }

    switch (action.type) {
        case "CHANGE": {
            return { count: state.count + action.by };
        }
        default:
            return state;
    }
}

export default counterReducer;
