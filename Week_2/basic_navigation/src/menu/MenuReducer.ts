import { MenuActions, TOGGLE_MENU } from "./MenuActions";
import { combineReducers } from "redux";

export interface State {
  menuVisible: boolean;
}

export const initialState = {
  menuVisible: false,
};

function toggleMenu(state: State = initialState, action: MenuActions): State {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menuVisible: action.visible,
      };
    default:
      return state;
  }
}

const app = combineReducers({toggleMenu})

export default app