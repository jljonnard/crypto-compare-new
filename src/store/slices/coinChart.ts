import { createSlice, PayloadAction, Selector } from "@reduxjs/toolkit";
import { CoinChartResponse } from "../../models/CoinChartResponse";
import { RootState } from "../store";

type CoinChartState = CoinChartResponse;

const INITIAL_STATE_COINCHART: CoinChartState = { prices: [[]] };

const { actions, reducer } = createSlice({
    name: "coinChart",
    initialState: INITIAL_STATE_COINCHART,
    reducers: {
        get: {
            prepare: (coin: string, days: number) => ({
                payload: {
                    coin,
                    days,
                },
            }),
            reducer: (state) => state,
        },
        set: (state, action: PayloadAction<CoinChartResponse>) =>
            action.payload,
    },
});

export const getRawCoinChart: Selector<RootState, CoinChartState> = (
    state: RootState
) => state.coinChart;

export const { set, get } = actions;

export default reducer;
