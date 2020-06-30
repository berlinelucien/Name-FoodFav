// Actions and their types

export const ADD = "ADD_ITEM";
export const COMPLETE = "COMPLETE_ITEM";

export function addItem(desc: string = "") {
    return {
        type: ADD,
        description: desc
    };
};

export function completeItem(desc: string) {
    return {
        type: COMPLETE,
        whichOne: desc
    };
};