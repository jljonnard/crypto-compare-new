import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    TrendingListItem,
    TrendingListResponse,
} from "../../models/TrendingList";

type TrendingListState = TrendingListItem[];

const INITIAL_STATE_TRENDINGLIST: TrendingListState = [
    { id: "", name: "", logo: "" },
];

const { actions, reducer } = createSlice({
    name: "trendingList",
    initialState: INITIAL_STATE_TRENDINGLIST,
    reducers: {
        get: (state) => state,
        set: (state, action: PayloadAction<{ data: TrendingListResponse }>) => {
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
