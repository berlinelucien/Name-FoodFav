// Actions and their types

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

export let increaseAction = {
    type: INCREASE
};

export let decreaseAction = {
    type: DECREASE
};

// Action creators

// Not used in this example

export function increaseCounter() {
    return increaseAction;
};

export function decreaseCounter() {
    return increaseAction;
};