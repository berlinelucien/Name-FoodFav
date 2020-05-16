import { TicTacToeActions, ActionTypes } from "./Actions";
import { TicTacToeState, BoxVal } from "./GameStore";

export const initialGameState: TicTacToeState = {
    boxVals: ['', '', '', '', '', '', '', '', ''],
    currentPlayer: 1,
    gameWinner: undefined
}

export function TicTacToeReducer(state: TicTacToeState = initialGameState, action: TicTacToeActions): TicTacToeState {
    if (state.gameWinner && action.type !== ActionTypes.ResetGame)
        return state;

    switch(action.type) {
        case ActionTypes.MarkBox:
            return state.boxVals[action.boxNumber] !== ''
                    ? state
                    : {
                        ...state,
                        boxVals:  [
                            ...state.boxVals.slice(0, action.boxNumber),
                            state.currentPlayer === 1 ? 'X' : 'Y',
                            ...state.boxVals.slice(action.boxNumber + 1)
                        ],
                        currentPlayer: state.currentPlayer === 1 ? 2 : 1
                      }
        case ActionTypes.FindWinner:
            return {
                ...state,
                gameWinner: doWeHaveAWinner(state.boxVals) 
                            ? state.currentPlayer : 
                            hasGameTied(state.boxVals)
                            ? 'tie'
                            : undefined
            }
        case ActionTypes.ResetGame:
            return {
                ...initialGameState
            }
        default:
            return state;
    }
}

function doWeHaveAWinner(vals: BoxVal[]): boolean {
    if ((vals[0] !== '' && vals[0] === vals[1] && vals[1] === vals[2])
        || (vals[3] !== '' && vals[3] === vals[4] && vals[4] === vals[5])
        || (vals[6] !== '' && vals[6] === vals[7] && vals[7] === vals[8])
        || (vals[0] !== '' && vals[0] === vals[3] && vals[3] === vals[6])
        || (vals[1] !== '' && vals[1] === vals[4] && vals[4] === vals[7])
        || (vals[2] !== '' && vals[2] === vals[5] && vals[5] === vals[8])
        || (vals[0] !== '' && vals[0] === vals[4] && vals[4] === vals[8])
        || (vals[2] !== '' && vals[2] === vals[4] && vals[4] === vals[6])
    ) {
        return true;
    }

    return false;
}

function hasGameTied(vals: BoxVal[]): boolean {
    if (vals.some((val: BoxVal, index: number, valsArr: BoxVal[]) => val === ''))
        return false;

    return true;
}