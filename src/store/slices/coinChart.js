import { getSixDigitsOnly } from "../../specificFunctions/getSixDigits.js";
import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: "coinChart",
    initialState: [[], []],
    reducers: {
        get: {
            prepare: (coin, days) => ({
                payload: {
                    coin,
                    days,
                },
            }),
            reducer: (state) => state,
        },
        set: {
            prepare: (response, days) => ({
                payload: { days, data: response.data },
            }),
            reducer: (state, action) => {
                switch (action.payload.days) {
                    case 1:
                        return [
                            action.payload.data.prices.map((time) => {
                                const tempDate = new Date(time[0]);
                                return tempDate.getHours().toString() + ":00";
                            }),
                            action.payload.data.prices.map((price) =>
                                getSixDigitsOnly(price[1])
                            ),
                        ];
                    case 7:
                        return [
                            action.payload.data.prices.map((time) => {
                                const tempDate = new Date(time[0]);
                                return (
                                    tempDate.getDate().toString() +
                                    " " +
                                    tempDate.getHours().toString() +
                                    ":00"
                                );
                            }),
                            action.payload.data.prices.map((price) =>
                                getSixDigitsOnly(price[1])
                            ),
                        ];
                    case 30:
                        return [
                            action.payload.data.prices.map((time) => {
                                const tempDate = new Date(time[0]);
                                return tempDate.getDate().toString();
                            }),
                            action.payload.data.prices.map((price) =>
                                getSixDigitsOnly(price[1])
                            ),
                        ];
                    case 90:
                        return [
                            action.payload.data.prices.map((time) => {
                                const tempDate = new Date(time[0]);
                                return (
                                    tempDate.getDate().toString() +
                                    "/" +
                                    (tempDate.getMonth() + 1).toString()
                                );
                            }),
                            action.payload.data.prices.map((price) =>
                                getSixDigitsOnly(price[1])
                            ),
                        ];
                    case 180:
                        return [
                            action.payload.data.prices.map((time) => {
                                const tempDate = new Date(time[0]);
                                return (
                                    tempDate.getDate().toString() +
                                    "/" +
                                    (tempDate.getMonth() + 1).toString()
                                );
                            }),
                            action.payload.data.prices.map((price) =>
                                getSixDigitsOnly(price[1])
                            ),
                        ];
                    case 365:
                        return [
                            action.payload.data.prices.map((time) => {
                                const tempDate = new Date(time[0]);
                                return (
                                    tempDate.getDate().toString() +
                                    "/" +
                                    (tempDate.getMonth() + 1).toString()
                                );
                            }),
                            action.payload.data.prices.map((price) =>
                                getSixDigitsOnly(price[1])
                            ),
                        ];
                    default:
                        return state;
                }
            },
        },
    },
});

export const { set, get } = actions;

export default reducer;