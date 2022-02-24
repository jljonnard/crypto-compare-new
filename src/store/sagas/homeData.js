import { takeLatest, call, put, fork } from "redux-saga/effects";
import * as api from "../apis";

import * as marketCapData from "../slices/marketcapData";
import * as trendingList from "../slices/trendingList";
import * as allCoinsList from "../slices/allCoinsList";

function* getAllCoinsList() {
    try {
        const response = yield call(api.getAllCoinsList);
        yield put(allCoinsList.set(response));
    } catch (error) {
        yield console.log(error);
    }
}

function* watchAllCoinsList() {
    yield takeLatest(allCoinsList.get.type, getAllCoinsList);
}

function* getMarketCapData() {
    try {
        const response = yield call(api.getMarketCap);
        yield put(marketCapData.set(response));
    } catch (error) {
        yield console.log(error);
    }
}

function* watchMarketCapData() {
    yield takeLatest(marketCapData.get.type, getMarketCapData);
}

function* getTrendingList() {
    try {
        const response = yield call(api.getTrendingList);
        yield put(trendingList.set(response));
    } catch (error) {
        yield console.log(error);
    }
}

function* watchTrendingList() {
    yield takeLatest(trendingList.get.type, getTrendingList);
}

const homeSagas = [
    fork(watchAllCoinsList),
    fork(watchMarketCapData),
    fork(watchTrendingList),
];

export default homeSagas;
