import { createSlice, PayloadAction, Selector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const { actions, reducer } = createSlice({
    name: "chartDays",
    initialState: 7,
    reducers: {
        set: (state, action: PayloadAction<number>) => action.payload,
    },
});

export const getChartDaysNumber: Selector<RootState, number> = (
    state: RootState
) => state.chartDays;

export const { set } = actions;

export default reducer;