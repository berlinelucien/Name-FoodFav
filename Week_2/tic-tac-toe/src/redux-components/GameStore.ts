import { TicTacToeReducer } from "./Reducers";
import { createStore } from "redux";

export type BoxVal = 'X' | 'Y' | '';
export type Player = 1 | 2;
export type GameWinner = Player | 'tie' | undefined;

export interface TicTacToeState {
  boxVals: BoxVal[];
  currentPlayer: Player;
  gameWinner: GameWinner;
}

export const gameStore = createStore(TicTacToeReducer);