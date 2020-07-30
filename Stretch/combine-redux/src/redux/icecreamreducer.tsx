import { icecreamAppState } from './types';
import { icecreamInitialState } from './data';
import {BuyIcecreamAction, actionIdentifier} from './actions';


function icecreamReducer(state: icecreamAppState | undefined, action: BuyIcecreamAction): icecreamAppState {
    if (state === undefined) {
        return icecreamInitialState;
    }

    console.log("Ice cream - Action type: " + action.type);

    switch (action.type) {
        case actionIdentifier.BuyIcecream: {
            console.log("Reducer buy icecream");

            let buyIcecreamAction = action as BuyIcecreamAction;

            let newState: icecreamAppState = {
                ...state,
                numIcecream: state.numIcecream + buyIcecreamAction.numIcecream
            }

            return newState;
        }

        default:
            return state;
    }
}

export default icecreamReducer;