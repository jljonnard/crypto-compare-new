import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: "versusChart",
    initialState: { time: [], leftPrice: [], rightPrice: [] },
    reducers: {
        get: {
            prepare: (leftCoin, rightCoin, days) => ({
                payload: { leftCoin, rightCoin, days },
            }),
            reducer: (state) => state,
        },
        set: {
            prepare: (leftCoin, rightCoin, days) => ({
                payload: { days, data: [leftCoin, rightCoin] },
            }),
            reducer: (state, action) => {
                switch (action.payload.days) {
                    case 1:
                        return {
                            time: action.payload.data[0].data.prices.map(
                                (time) => {
                                    const tempDate = new Date(time[0]);
                                    return (
                                        tempDate.getHours().toString() + ":00"
                                    );
                                }
                            ),
                            leftPrice: action.payload.data[0].data.prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[0].data
                                                .prices[0][1]) /
                                            action.payload.data[0].data
                                                .prices[0][1]) *
                                            10000
                                    ) / 100
                            ),
                            rightPrice: action.payload.data[1].data.prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[1].data
                                                .prices[0][1]) /
                                            action.payload.data[1].data
                                                .prices[0][1]) *
                                            10000
                                    ) / 100
                            ),
                        };
                    case 7:
                        return {
                            time: action.payload.data[0].data.prices.map(
                                (time) => {
                                    const tempDate = new Date(time[0]);
                                    return (
                                        tempDate.getDate().toString() +
                                        " " +
                                        tempDate.getHours().toString() +
                                        ":00"
                                    );
                                }
                            ),
                            leftPrice: action.payload.data[0].data.prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[0].data
                                                .prices[0][1]) /
                                            action.payload.data[0].data
                                                .prices[0][1]) *
                                            10000
                                    ) / 100
                            ),
                            rightPrice: action.payload.data[1].data.prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[1].data
                                                .prices[0][1]) /
                                            action.payload.data[1].data
                                                .prices[0][1]) *
                                            10000
                                    ) / 100
                            ),
                        };
                    case 30:
                        return {
                            time: action.payload.data[0].data.prices.map(
                                (time) => {
                                    const tempDate = new Date(time[0]);
                                    return tempDate.getDate().toString();
                                }
                            ),
                            leftPrice: action.payload.data[0].data.prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[0].data
                                                .prices[0][1]) /
                                            action.payload.data[0].data
                                                .prices[0][1]) *
                                            10000
                                    ) / 100
                            ),
                            rightPrice: action.payload.data[1].data.prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[1].data
                                                .prices[0][1]) /
                                            action.payload.data[1].data
                                                .prices[0][1]) *
                                            10000
                                    ) / 100
                            ),
                        };
                    case 90:
                        return {
                            time: action.payload.data[0].data.prices.map(
                                (time) => {
                                    const tempDate = new Date(time[0]);
                                    return (
                                        tempDate.getDate().toString() +
                                        "/" +
                                        (tempDate.getMonth() + 1).toString()
                                    );
                                }
                            ),
                            leftPrice: action.payload.data[0].data.prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[0].data
                                                .prices[0][1]) /
                                            action.payload.data[0].data
                                                .prices[0][1]) *
                                            10000
                                    ) / 100
                            ),
                            rightPrice: action.payload.data[1].data.prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[1].data
                                                .prices[0][1]) /
                                            action.payload.data[1].data
                                                .prices[0][1]) *
                                            10000
                                    ) / 100
                            ),
                        };
                    case 180:
                        return {
                            time: action.payload.data[0].data.prices.map(
                                (time) => {
                                    const tempDate = new Date(time[0]);
                                    return (
                                        tempDate.getDate().toString() +
                                        "/" +
                                        (tempDate.getMonth() + 1).toString()
                                    );
                                }
                            ),
                            leftPrice: action.payload.data[0].data.prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[0].data
                                                .prices[0][1]) /
                                            action.payload.data[0].data
                                                .prices[0][1]) *
                                            10000
                                    ) / 100
                            ),
                            rightPrice: action.payload.data[1].data.prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[1].data
                                                .prices[0][1]) /
                                            action.payload.data[1].data
                                                .prices[0][1]) *
                                            10000
                                    ) / 100
                            ),
                        };
                    case 365:
                        return {
                            time: action.payload.data[0].data.prices.map(
                                (time) => {
                                    const tempDate = new Date(time[0]);
                                    return (
                                        tempDate.getDate().toString() +
                                        "/" +
                                        (tempDate.getMonth() + 1).toString()
                                    );
                                }
                            ),
                            leftPrice: action.payload.data[0].data.prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[0].data
                                                .prices[0][1]) /
                                            action.payload.data[0].data
                                                .prices[0][1]) *
                                            10000
                                    ) / 100
                            ),
                            rightPrice: action.payload.data[1].data.prices.map(
                                (price) =>
                                    Math.round(
                                        ((price[1] -
                                            action.payload.data[1].data
                                                .prices[0][1]) /
                                            action.payload.data[1].data
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
