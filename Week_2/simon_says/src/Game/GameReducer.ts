import { GameState, PlayingState } from "./GameState";
import { GameActions, GameActionsTypes } from "./GameActionTypes";

const defaultState: GameState = {
  pattern: [],
  playerPattern: [],
  tiles: [false, false, false, false],
  playingState: PlayingState.notStarted,
  score: 0,
};
export function GameReducer(
  state: GameState = defaultState,
  action: GameActions
): GameState {
  switch (action.type) {
    case GameActionsTypes.ADD_VALUE_TO_PATTERN:
      const newValue = Math.floor(Math.random() * 4);
      const newPattern: Array<number> = state.pattern.concat([newValue]);
      return {
        ...state,
        pattern: newPattern,
      };
    case GameActionsTypes.UPDATE_TILE:
      const newTiles = state.tiles.concat([]);
      newTiles[action.tileIndex] = action.value;
      return {
        ...state,
        tiles: newTiles,
      };
    case GameActionsTypes.SUBMIT_TILE:
      const playerPattern = state.playerPattern.concat([action.value]);
      if (state.playingState === PlayingState.waitingOnPlayer) {
        const newTiles = state.tiles.concat([]);
        newTiles[action.value] = true;
        if (playerPattern.length < state.pattern.length) {
          return {
            ...state,
            playerPattern: playerPattern,
            tiles: newTiles,
          };
        }
        if (playerPattern.toString() === state.pattern.toString()) {
          console.log("Correct Pattern");
          return {
            ...state,
            playingState: PlayingState.showingNextInput,
            tiles: newTiles,
            playerPattern: [],
            score: state.score + 1,
          };
        } else {
          console.log("Wrong pattern");
          return {
            ...state,
            playingState: PlayingState.GameOver,
            tiles: newTiles,
          };
        }
      } else {
        console.log("was not waiting on player");
        return {
          ...state,
        };
      }
    case GameActionsTypes.SET_PLAYING_STATE:
      return {
        ...state,
        playingState: action.value,
      };
    case GameActionsTypes.SET_CAT_URL:
      return {
        ...state,
        catPictureUrl: action.value,
      };
    default:
      return state;
  }
}
