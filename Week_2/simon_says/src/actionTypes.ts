import React from "react";
import { Action } from "redux";

export enum GamePageActionsTypes {
  UPDATE_PATTERN = "UPDATE_PATTERN"
}

// Actions
export interface UpdatePattern extends Action {
  readonly type: GamePageActionsTypes.UPDATE_PATTERN;
  readonly pattern: Array<number>;
}
// Union of All Actions
export type GamePageActions = UpdatePattern;
