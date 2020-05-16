import { Action } from "redux"

export enum ActionTypes {
    MarkBox = "MarkBox",
    FindWinner = "FindWinner",
    ResetGame = "Resetgame"
}

export interface MarkBoxAction extends Action<ActionTypes> {
    boxNumber: number;
}

export function MarkBox(boxNumber: number): MarkBoxAction {
    return {
        type: ActionTypes.MarkBox,
        boxNumber
    }
}

export function FindWinner(): Action<ActionTypes.FindWinner> {
    return {
        type: ActionTypes.FindWinner
    }
}

export function ResetGame(): Action<ActionTypes.ResetGame> {
    return {
        type: ActionTypes.ResetGame
    }
}

export type TicTacToeActions = 
    MarkBoxAction 
    | Action<ActionTypes.FindWinner>
    | Action<ActionTypes.ResetGame>;