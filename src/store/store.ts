import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import rootSaga from "./sagas";
import createSagaMiddleware from "@redux-saga/core";

import trendingList from "./slices/trendingList";
import allCoinsList from "./slices/allCoinsList";
import marketCapData from "./slices/marketCapData";
import coinData from "./slices/coinData";
import coinChart from "./slices/coinChart";
import chartDays from "./slices/chartDays"
import versusChart from "./slices/versusChart";
import favoriteList from "./slices/favoriteList";
import visibilityFilter from "./slices/visibilityFilter";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = {
        trendingList: trendingList,
        allCoinsList: allCoinsList,
        marketCapData: marketCapData,
        coinData: coinData,
        coinChart: coinChart,
        chartDays: chartDays,
        versusChart: versusChart,
        favoriteList: favoriteList,
        visibilityFilter: visibilityFilter,
    }

const store: EnhancedStore = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>

export default store;
