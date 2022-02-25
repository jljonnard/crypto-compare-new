import { PayloadAction } from "@reduxjs/toolkit";
import { takeLatest, call, put, fork } from "redux-saga/effects";
import { CoinChartResponse } from "../../models/CoinChartResponse";
import * as api from "../apis";

import * as coinChart from "../slices/coinChart";
import * as versusChart from "../slices/versusChart";

function* getCoinChart(action: PayloadAction<{ coin: string; days: number }>) {
    try {
        const response: { data: CoinChartResponse } = yield call(
            api.getCoinChart,
            {
                coin: action.payload.coin,
                days: action.payload.days,
            }
        );
        yield put(coinChart.set(response, action.payload.days));
    } catch (error) {
        yield console.log(error);
    }
}

function* watchCoinChart() {
    yield takeLatest(coinChart.get.type, getCoinChart);
}

function* getVersusChart(
    action: PayloadAction<{ leftCoin: string; rightCoin: string; days: number }>
) {
    try {
        const leftCoin: { data: CoinChartResponse } = yield call(
            api.getCoinChart,
            {
                coin: action.payload.leftCoin,
                days: action.payload.days,
            }
        );
        const rightCoin: { data: CoinChartResponse } = yield call(
            api.getCoinChart,
            {
                coin: action.payload.rightCoin,
                days: action.payload.days,
            }
        );
        yield put(
            versusChart.set(leftCoin.data, rightCoin.data, action.payload.days)
        );
    } catch (error) {
        yield console.log(error);
    }
}

function* watchVersusChart() {
    yield takeLatest(versusChart.get.type, getVersusChart);
}

const chartSagas = [fork(watchCoinChart), fork(watchVersusChart)];

export default chartSagas;
