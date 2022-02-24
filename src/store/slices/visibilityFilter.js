import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: "visibilityFilter",
    initialState: "HOME",
    reducers: {
        set: (state, action) => action.payload,
    },
});

export const { set } = actions;

export default reducer;
