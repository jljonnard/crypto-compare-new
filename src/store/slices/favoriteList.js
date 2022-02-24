import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: "favoriteList",
    initialState: [],
    reducers: {
        add: (state, action) => {
            return [...state, action.payload]
        },
        remove: (state, action) => {
            return state.filter(coin => coin.id !== action.payload.id)
        },
    },
});

export const { add, remove } = actions;

export default reducer;
