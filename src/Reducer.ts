import { ActionTypes } from "./actions";

export interface AppState {
    list: Array<string>
}

const defaultState: AppState = {
    list: []
}

export default function rootReducer(state: AppState = defaultState, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_LIST_ITEM:
            const listArray = state.list.concat([action.item])
            return {
                list: listArray
            }
        default:
            return state;

    }

}