// State of the app
import { increaseAction, decreaseAction } from './actions';

// Interface for the state of the app (store)
export interface CounterAppState {
  count: number
}

// Types of the actions
export type CounterActionsTypes = typeof decreaseAction | typeof increaseAction;

export default CounterAppState;
