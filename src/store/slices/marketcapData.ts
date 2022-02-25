import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MarketcapDataResponse } from "../../models/MarketCapDataResponse";

type MarketcapDataState = {
    coins: string[];
    percentages: number[];
};

const INITIAL_STATE_MARKETCAPDATA: MarketcapDataState = {
    coins: [],
    percentages: [],
};

const { actions, reducer } = createSlice({
    name: "marketCapData",
    initialState: INITIAL_STATE_MARKETCAPDATA,
    reducers: {
        get: (state) => state,
        set: (state, action: PayloadAction<MarketcapDataResponse>) => {
            return {
                coins: Object.keys(
                    action.payload.data.data.market_cap_percentage
                ),
                percentages: Object.values(
                    action.payload.data.data.market_cap_percentage
                )
                    .map((percentage) => Math.round(percentage * 100) / 100)
                    .concat([
                        Math.round(
                            (100 -
                                Object.values(
                                    action.payload.data.data
                                        .market_cap_percentage
                                ).reduce((x, y) => x + y)) *
                                100
                        ) / 100,
                    ]),
            };
        },
    },
});

export const { get, set } = actions;

export default reducer;
