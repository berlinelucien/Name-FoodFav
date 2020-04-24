import { MenuActions, TOGGLE_MENU } from "./MenuActions";
import { combineReducers } from "redux";

export interface AppState {
  menuVisible: boolean;
}

export const initialState = {
  menuVisible: false,
};

function toggleMenu(state: AppState = initialState, action: MenuActions): AppState {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menuVisible: !state.menuVisible,
      };
    default:
      return state;
  }
}

const app = combineReducers({toggleMenu})

export default app