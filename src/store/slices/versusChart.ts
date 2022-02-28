import { createSlice, PayloadAction, Selector } from "@reduxjs/toolkit";
import { CoinChartResponse } from "../../models/CoinChartResponse";
import { RootState } from "../store";

type VersusChartState = CoinChartResponse[];

const INITIAL_STATE_VERSUSCHART: VersusChartState = [
    { prices: [[]] },
    { prices: [[]] },
];

const { actions, reducer } = createSlice({
    name: "versusChart",
    initialState: INITIAL_STATE_VERSUSCHART,
    reducers: {
        get: {
            prepare: (leftCoin: string, rightCoin: string, days: number) => ({
                payload: { leftCoin, rightCoin, days },
            }),
            reducer: (state) => state,
        },
        set: {
            prepare: (
                leftCoin: CoinChartResponse,
                rightCoin: CoinChartResponse
            ) => ({
                payload: [leftCoin, rightCoin],
            }),
            reducer: (state, action: PayloadAction<CoinChartResponse[]>) =>
                action.payload,
        },
    },
});

export const getRawVersusChart: Selector<RootState, VersusChartState> = (
    state: RootState
) => state.versusChart;

export const { set, get } = actions;

export default reducer;
