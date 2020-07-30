export enum actionIdentifier {
    BuyCake,
    BuyIcecream
}

export interface BuyCakeAction {
    type: actionIdentifier; 
    numCake: number;
}

export interface BuyIcecreamAction {
    type: actionIdentifier;  
    numIcecream: number;
}

export function createBuyCakeAction(n: number = 1): BuyCakeAction {
    return {
        type: actionIdentifier.BuyCake,
        numCake: n
    };
};

export function createBuyIcecreamAction(n: number = 4): BuyIcecreamAction {
    return {
        type: actionIdentifier.BuyIcecream,
        numIcecream: n
    };
};

export type BuyActions = BuyCakeAction | BuyIcecreamAction