import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: "visibilityFilter",
    initialState: "HOME",
    reducers: {
        set: (state, action: PayloadAction<string>) => action.payload,
    },
});

export const { set } = actions;

export default reducer;
