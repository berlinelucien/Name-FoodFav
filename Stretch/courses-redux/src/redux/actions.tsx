// Actions and their types

// Enumerate all actions

export enum actionIdentifier {
    SignIn,
    EnrollCourse
}

// Definition of the actions as objects
// The type of an action is required

export interface SignInAction {
    type: actionIdentifier; 
    username: string;
    password: string;
}

export interface EnrollCourseAction {
    type: actionIdentifier;  
    courseId: number;
}

// Action creator functions

export function createSignInAction(u: string, p: string): SignInAction {
    return {
        type: actionIdentifier.SignIn,
        username: u,
        password: p
    };
};

export function createEnrollCourseAction(cid: number): EnrollCourseAction {
    return {
        type: actionIdentifier.EnrollCourse,
        courseId: cid
    };
};

export type Edu4YouActions = SignInAction | EnrollCourseAction