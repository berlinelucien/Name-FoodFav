import {
  GameActionsTypes,
  AddValueToPattern,
  UpdateTile,
  SubmitTile,
} from "./GameActionTypes";
import { PlayingState, GameState } from "./GameState";

export const addValueToPattern = (): AddValueToPattern => ({
  type: GameActionsTypes.ADD_VALUE_TO_PATTERN,
});

export const updateTile = (tileIndex: number, value: boolean): UpdateTile => ({
  type: GameActionsTypes.UPDATE_TILE,
  tileIndex: tileIndex,
  value: value,
});

export const submitTile = (value: number): SubmitTile => ({
  type: GameActionsTypes.SUBMIT_TILE,
  value: value,
});

export const setPlayingState = (value: PlayingState) => ({
  type: GameActionsTypes.SET_PLAYING_STATE,
  value: value,
});

export const setCatPictures = (value: string) => ({
  type: GameActionsTypes.SET_CAT_URL,
  value: value,
});

export const setScore = (value: number) => ({
  type: GameActionsTypes.SET_SCORE,
  value: value,
});

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const startGame = () => {
  return (dispatch: any, getState: () => GameState) => {
    const state = getState();
    if (state.playingState === PlayingState.notStarted) {
      dispatch(addValueToPattern());
      dispatch(showPattern());
    }
  };
};

export const startNextRound = (prevState: PlayingState) => {
  return (dispatch: any, getState: () => GameState) => {
    const state = getState();
    if (prevState !== state.playingState) {
      if (state.playingState === PlayingState.showingNextInput) {
        dispatch(addValueToPattern());
        dispatch(showPattern());
      }
    }
  };
};

export const showPattern = () => {
  return async (dispatch: any, getState: () => GameState) => {
    await sleep(600);
    const state = getState();
    for (var i = 0; i < state.pattern.length; i++) {
      if (state.pattern[i] !== -1) {
        dispatch(updateTile(state.pattern[i], true));
        await sleep(600);
      }
    }
    dispatch(setPlayingState(PlayingState.waitingOnPlayer));
  };
};

export const getCatPicture = () => {
  return (dispatch: any) => {
    const url = new URL("https://api.thecatapi.com/v1/images/search");
    url.searchParams.append("limit", "1");
    url.searchParams.append("size", "full");
    const urlString = url.toJSON();
    fetch(urlString)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setCatPictures(data[0].url));
      });
  };
};
