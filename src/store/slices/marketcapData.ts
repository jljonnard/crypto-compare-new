import { createSlice, PayloadAction, Selector } from "@reduxjs/toolkit";
import { MarketCapDataResponse } from "../../models/MarketCapDataResponse";
import { RootState } from "../store";

type MarketCapDataState = {
    btc: number;
};

const INITIAL_STATE_MARKETCAPDATA: MarketCapDataState = {
    btc: 100,
};

const { actions, reducer } = createSlice({
    name: "marketCapData",
    initialState: INITIAL_STATE_MARKETCAPDATA,
    reducers: {
        get: (state) => state,
        set: (state, action: PayloadAction<MarketCapDataResponse>) => {
            return action.payload.data.data.market_cap_percentage;
        },
    },
});

export const getRawMarketCapData: Selector<RootState, MarketCapDataState> = (
    state: RootState
) => state.marketCapData;

export const { get, set } = actions;

export default reducer;
