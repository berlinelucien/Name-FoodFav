// Actions and their types

// TODO: Look for these 'TODO' comments for guidance on what to add/change to add
// an action(s)

export enum actionIdentifier {
    Add
    // TODO: Add another item to this list. Don't forget to add a comma on the previous line!
}

export interface AddAction {
    type: actionIdentifier;
    name: string;
    phone: string;
    zip: string;
}

// TODO: Copy-and-paste-and-modify the AddAction interface
// in order to add another Redux action

export function joinInfo(nam: string, ph: string, z: string): AddAction {
    return {
        type: actionIdentifier.Add,
        name: nam,
        phone: ph,
        zip: z
    };
};

// TODO: Create another 'creator function' (like 'joinInfo') in order
// to be able to create more actions

export type YourShareActions = AddAction
// TODO: On the line above add a vertical bar and then then name of the new action's interface, like so:
// export type YourShareActions = AddAction | RemoveAction