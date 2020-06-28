// State of the app
import {increaseAction, decreaseAction} from './actions';

export interface CounterAppState {
    count: number
  }

export type CounterActionsTypes = typeof decreaseAction | typeof increaseAction;

export default CounterAppState;
