import { Actions } from "../types/store";

export const reducer = (currentAction: any, currentState: any) => {
    const { type, payload } = currentAction; 

    switch (type) {    
        case "NAVIGATE":
            currentState.screen = payload
            break;
        case "VIEW_DETAIL":
            currentState.bookDetails = currentAction.payload
            break;
    }

    return currentState;
}