const defaultState = {
    list: []
}

export default function rootReducer(state: any = defaultState, action: any) {
    switch (action.type) {
        case "ADDLISTITEM":
            const listArray = state.list.concat([action.item])
            return {
                list: listArray
            }
        default:
            return state;

    }

}