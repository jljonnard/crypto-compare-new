import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CoinData } from "../../models/CoinData";

type FavoriteListState = CoinData[];

const INITIAL_STATE_FAVORITELIST: FavoriteListState = [];

const { actions, reducer } = createSlice({
    name: "favoriteList",
    initialState: INITIAL_STATE_FAVORITELIST,
    reducers: {
        add: (state, action: PayloadAction<CoinData>) => {
            return [...state, action.payload];
        },
        remove: (state, action: PayloadAction<CoinData>) => {
            return state.filter((coin) => coin.id !== action.payload.id);
        },
    },
});

export const { add, remove } = actions;

export default reducer;
