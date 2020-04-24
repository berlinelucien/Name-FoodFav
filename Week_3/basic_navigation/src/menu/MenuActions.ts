import { Action } from "redux";

/**
 * Action Types
 */
export const TOGGLE_MENU = "TOGGLE_MENU";

export interface ToggleMenuAction extends Action {
  type: typeof TOGGLE_MENU;
  visible: boolean;
}

export type MenuActions = ToggleMenuAction;

/**
 * Action Creators
 */

export function toggleMenu(visible: boolean) {
  return {
    type: TOGGLE_MENU,
    visible: visible,
  };
}
