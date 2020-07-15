// Actions and their types

export enum actionIdentifier {
    Add,
    Toggle
}

interface Action {
    type: actionIdentifier;
}

export interface AddAction extends Action {
    description: string;
}

export function addItem(desc: string): AddAction {
    return {
        type: actionIdentifier.Add,
        description: desc
    };
};


export interface ToggleAction extends Action {
    id: number;
}

export function toggleItem(idToComplete: number): ToggleAction {
    return {
        type: actionIdentifier.Toggle,
        id: idToComplete
    }
};

export type TodoActions = AddAction | ToggleAction