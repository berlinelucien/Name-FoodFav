// Actions and their types

export enum actionIdentifier {
    Add
}

interface Action {
    type: actionIdentifier;
}

export interface AddAction extends Action {
    name: string;
    phone: string;
    zip: string;
}

export function joinInfo(nam: string, ph: string, z: string): AddAction {
    return {
        type: actionIdentifier.Add,
        name: nam,
        phone: ph,
        zip: z
    };
};


export type YourShareActions = AddAction