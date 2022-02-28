import { createSlice, PayloadAction, Selector } from "@reduxjs/toolkit";
import { TrendingListResponse } from "../../models/TrendingList";
import { RootState } from "../store";

type TrendingListState = TrendingListResponse;

const INITIAL_STATE_TRENDINGLIST: TrendingListState = {
    coins: [
        {
            item: {
                id: "",
                coin_id: 0,
                name: "",
                symbol: "",
                market_cap_rank: 0,
                thumb: "",
                small: "",
                large: "",
                slug: "",
                price_btc: 0,
                score: 0,
            },
        },
    ],
};

const { actions, reducer } = createSlice({
    name: "trendingList",
    initialState: INITIAL_STATE_TRENDINGLIST,
    reducers: {
        get: (state) => state,
        set: (state, action: PayloadAction<TrendingListResponse>) =>
            action.payload,
    },
});

export const { get, set } = actions;

export const getRawTrendingList: Selector<RootState, TrendingListState> = (
    state: RootState
) => state.trendingList;

export default reducer;
