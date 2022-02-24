import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: "trendingList",
    initialState: [{ id: "", name: "", logo: "" }],
    reducers: {
        get: (state) => state,
        set: (state, action) => {
            return action.payload.data.coins.map((coin) => ({
                id: coin.item.id,
                name: coin.item.name,
                logo: coin.item.thumb,
            }));
        },
    },
});

export const { get, set } = actions;

export default reducer;
