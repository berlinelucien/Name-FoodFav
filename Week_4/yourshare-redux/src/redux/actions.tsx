// Actions and their types

// TODO: Look for these 'TODO' comments for guidance on what to add/change to add
// an action(s)

export enum actionIdentifier {
    Join
    // TODO: Add another item to this list. Don't forget to add a comma on the previous line!
}

export interface JoinAction {
    type: actionIdentifier;  // TODO WARNING: Any new actions MUST have a type: actionIdentifier too!!!!!!!!!!!
    name: string;
    phone: string;
    zip: string;
}

// TODO: Copy-and-paste-and-modify the AddAction interface
// in order to add another Redux action

export function createJoinAction(nam: string, ph: string, z: string): JoinAction {
    return {
        type: actionIdentifier.Join,
        name: nam,
        phone: ph,
        zip: z
    };
};

// TODO: Create another 'creator function' (like 'joinInfo') in order
// to be able to create more actions

export type YourShareActions = JoinAction
// TODO: On the line above add a vertical bar and then then name of the new action's interface, like so:
// export type YourShareActions = AddAction | RemoveAction