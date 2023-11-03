import { Screens } from "../types/navigation";
import { Actions } from "../types/store";

export const navigate = (screen: Screens) => {
    return {
        type: "NAVIGATE",
        payload: screen,
    };
};