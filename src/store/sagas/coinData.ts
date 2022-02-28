import { takeLatest, call, put, fork } from "redux-saga/effects";
import * as actions from "../slices/coinData";
import * as api from "../apis";
import { CoinDataResponse } from "../../models/CoinDataResponse";
import { PayloadAction } from "@reduxjs/toolkit";

function* getCoinData(action: PayloadAction<{ coin: string; right: boolean }>) {
    try {
        const response: { data: CoinDataResponse } = yield call(
            api.getCoinData,
            action.payload.coin
        );
        if (action.payload.right) {
            yield put(actions.setRight(response.data));
        } else {
            yield put(actions.setLeft(response.data));
        }
    } catch (error) {
        yield console.log(error);
    }
}

function* watchCoinData() {
    yield takeLatest(actions.get.type, getCoinData);
}

const coinSagas = [fork(watchCoinData)];

export default coinSagas;
