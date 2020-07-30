import { cakeAppState } from './types';
import { cakeInitialState } from './data';
import {BuyCakeAction, actionIdentifier} from './actions';


function cakeReducer(state: any | undefined, action: BuyCakeAction): any {
    if (state === undefined) {
        return cakeInitialState;
    }

    console.log("Cake - Action type: " + action.type);

    switch (action.type) {
        case actionIdentifier.BuyCake: {
            console.log("Reducer buy cake");

            console.log("STATE");
            console.log(state);

            let buyCakeAction = action as BuyCakeAction;

            console.log("state.numCake");
            console.log(state.numCake);

            console.log("buyCakeAction.numCake");
            console.log(buyCakeAction.numCake);

            let newState: cakeAppState = {
                ...state,
                numCake: state.numCake + buyCakeAction.numCake
            }

            console.log("NEW STATE");
            console.log(newState);

            return newState;
        }

        default:
            return state;
    }
}

export default cakeReducer;