import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CoinChartResponse } from "../../models/CoinChartResponse";

type VersusChartState = {
    time: string[];
    leftPrice: number[];
    rightPrice: number[];
};

const INITIAL_STATE_VERSUSCHART: VersusChartState = {
    time: [],
    leftPrice: [],
    rightPrice: [],
};

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
                rightCoin: CoinChartResponse,
                days: number
            ) => ({
                payload: { days, data: [leftCoin, rightCoin] },
            }),
            reducer: (
                state,
                action: PayloadAction<{
                    days: number;
                    data: CoinChartResponse[];
                }>
            ) => {
                switch (action.payload.days) {
                    case 1:
                        return {
                            time: action.payload.data[0].prices.map((time) => {
                                const tempDate = new Date(time[0]);
                                return tempDate.getHours().toString() + ":00";
                            }),
                            leftPrice: action.payload.data[0].prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[0]
                                                .prices[0][1]) /
                                            action.payload.data[0]
                                                .prices[0][1]) *
                                            10000
                                    ) / 100
                            ),
                            rightPrice: action.payload.data[1].prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[1]
                                                .prices[0][1]) /
                                            action.payload.data[1]
                                                .prices[0][1]) *
                                            10000
                                    ) / 100
                            ),
                        };
                    case 7:
                        return {
                            time: action.payload.data[0].prices.map((time) => {
                                const tempDate = new Date(time[0]);
                                return (
                                    tempDate.getDate().toString() +
                                    " " +
                                    tempDate.getHours().toString() +
                                    ":00"
                                );
                            }),
                            leftPrice: action.payload.data[0].prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[0]
                                                .prices[0][1]) /
                                            action.payload.data[0]
                                                .prices[0][1]) *
                                            10000
                                    ) / 100
                            ),
                            rightPrice: action.payload.data[1].prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[1]
                                                .prices[0][1]) /
                                            action.payload.data[1]
                                                .prices[0][1]) *
                                            10000
                                    ) / 100
                            ),
                        };
                    case 30:
                        return {
                            time: action.payload.data[0].prices.map((time) => {
                                const tempDate = new Date(time[0]);
                                return tempDate.getDate().toString();
                            }),
                            leftPrice: action.payload.data[0].prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[0]
                                                .prices[0][1]) /
                                            action.payload.data[0]
                                                .prices[0][1]) *
                                            10000
                                    ) / 100
                            ),
                            rightPrice: action.payload.data[1].prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[1]
                                                .prices[0][1]) /
                                            action.payload.data[1]
                                                .prices[0][1]) *
                                            10000
                                    ) / 100
                            ),
                        };
                    case 90:
                        return {
                            time: action.payload.data[0].prices.map((time) => {
                                const tempDate = new Date(time[0]);
                                return (
                                    tempDate.getDate().toString() +
                                    "/" +
                                    (tempDate.getMonth() + 1).toString()
                                );
                            }),
                            leftPrice: action.payload.data[0].prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[0]
                                                .prices[0][1]) /
                                            action.payload.data[0]
                                                .prices[0][1]) *
                                            10000
                                    ) / 100
                            ),
                            rightPrice: action.payload.data[1].prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[1]
                                                .prices[0][1]) /
                                            action.payload.data[1]
                                                .prices[0][1]) *
                                            10000
                                    ) / 100
                            ),
                        };
                    case 180:
                        return {
                            time: action.payload.data[0].prices.map((time) => {
                                const tempDate = new Date(time[0]);
                                return (
                                    tempDate.getDate().toString() +
                                    "/" +
                                    (tempDate.getMonth() + 1).toString()
                                );
                            }),
                            leftPrice: action.payload.data[0].prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[0]
                                                .prices[0][1]) /
                                            action.payload.data[0]
                                                .prices[0][1]) *
                                            10000
                                    ) / 100
                            ),
                            rightPrice: action.payload.data[1].prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[1]
                                                .prices[0][1]) /
                                            action.payload.data[1]
                                                .prices[0][1]) *
                                            10000
                                    ) / 100
                            ),
                        };
                    case 365:
                        return {
                            time: action.payload.data[0].prices.map((time) => {
                                const tempDate = new Date(time[0]);
                                return (
                                    tempDate.getDate().toString() +
                                    "/" +
                                    (tempDate.getMonth() + 1).toString()
                                );
                            }),
                            leftPrice: action.payload.data[0].prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[0]
                                                .prices[0][1]) /
                                            action.payload.data[0]
                                                .prices[0][1]) *
                                            10000
                                    ) / 100
                            ),
                            rightPrice: action.payload.data[1].prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[1]
                                                .prices[0][1]) /
                                            action.payload.data[1]
                                                .prices[0][1]) *
                                            10000
                                    ) / 100
                            ),
                        };
                    default:
                        return state;
                }
            },
        },
    },
});

export const { set, get } = actions;

export default reducer;
