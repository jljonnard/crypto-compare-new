import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: "allCoinsList",
    initialState: [[]],
    reducers: {
        get: (state) => state,
        set: (state, action) => action.payload.data,
    },
});

export const { get, set } = actions;

export default reducer;
