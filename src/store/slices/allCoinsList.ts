import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllCoinsListResponse } from "../../models/AllCoinsListResponse";

type AllCoinsListState = {
    id: string;
    symbol: string;
    name: string;
}[];

const INITIAL_STATE_ALLCOINSLIST: AllCoinsListState = []

const { actions, reducer } = createSlice({
    name: "allCoinsList",
    initialState: INITIAL_STATE_ALLCOINSLIST,
    reducers: {
        get: (state) => state,
        set: (state, action: PayloadAction<AllCoinsListResponse>) =>
            action.payload.data,
    },
});

export const { get, set } = actions;

export default reducer;
