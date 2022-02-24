import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: "marketCapData",
    initialState: { coins: [], percentages: [] },
    reducers: {
        get: (state) => state,
        set: (state, action) => {
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
