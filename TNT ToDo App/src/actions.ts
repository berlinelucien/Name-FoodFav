import { Action } from "redux";

export enum ActionTypes {
    ADD_LIST_ITEM = "ADD_LIST_ITEM"
}

export interface AddListItem extends Action {
    type: ActionTypes.ADD_LIST_ITEM;
    item: string;
}

export const addListItem = (item: string): AddListItem => ({
    type: ActionTypes.ADD_LIST_ITEM,
    item: item
})

