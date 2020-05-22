import { Action } from "redux";
import { PlayingState } from "./GameState";

export enum GameActionsTypes {
  ADD_VALUE_TO_PATTERN = "ADD_VALUE_TO_PATTERN",
  SET_TILES = "SET_TILES",
  UPDATE_TILE = "UPDATE_TILE",
  SUBMIT_TILE = "SUBMIT_TILE",
  SET_PLAYING_STATE = "SET_PLAYING_STATE",
  SET_CAT_URL = "SET_CAT_URL",
  SET_SCORE = "SET_SCORE",
}

// Actions

export interface AddValueToPattern extends Action {
  readonly type: GameActionsTypes.ADD_VALUE_TO_PATTERN;
}

export interface UpdateTile extends Action {
  readonly type: GameActionsTypes.UPDATE_TILE;
  readonly tileIndex: number;
  readonly value: boolean;
}

export interface SubmitTile extends Action {
  readonly type: GameActionsTypes.SUBMIT_TILE;
  readonly value: number;
}

export interface SetPlayingState extends Action {
  readonly type: GameActionsTypes.SET_PLAYING_STATE;
  readonly value: PlayingState;
}

export interface SetCatTypes extends Action {
  readonly type: GameActionsTypes.SET_CAT_URL;
  readonly value: string;
}

export interface SetScore extends Action {
  readonly type: GameActionsTypes.SET_SCORE;
  readonly value: number;
}
// Union of All Actions
export type GameActions =
  | AddValueToPattern
  | UpdateTile
  | SubmitTile
  | SetPlayingState
  | SetCatTypes
  | SetScore;
