export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    screen: string
}

export enum ScreenActions {
    "NAVIGATE" = "NAVIGATE",
}
export const showDetail = (book:any) => {
    return {
        type: "VIEW_DETAIL",
        payload: book,
    };
};

export type Actions = ScreenActions;