import { createSlice, PayloadAction, Selector } from "@reduxjs/toolkit";
import { CoinDataResponse } from "../../models/CoinDataResponse";
import { RootState } from "../store";

type CoinDataState = {
    left: CoinDataResponse | null;
    right: CoinDataResponse | null;
};

const INITIAL_STATE_COINDATA: CoinDataState = { left: null, right: null };
const { actions, reducer } = createSlice({
    name: "coinData",
    initialState: INITIAL_STATE_COINDATA,
    reducers: {
        get: {
            prepare: (coin, right = false) => ({
                payload: {
                    coin,
                    right,
                },
            }),
            reducer: (state) => state,
        },
        setLeft: (state, action: PayloadAction<CoinDataResponse>) => {
            return { ...state, left: action.payload };
        },
        setRight: (state, action: PayloadAction<CoinDataResponse>) => {
            return { ...state, right: action.payload };
        },
    },
});

export const getRawCoinData: Selector<RootState, CoinDataState> = (
    state: RootState
) => state.coinData;

export const { get, setLeft, setRight } = actions;

export default reducer;
