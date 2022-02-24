import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./sagas";
import createSagaMiddleware from "@redux-saga/core";

import trendingCoinList from "./slices/trendingList.js";
import allCoinsList from "./slices/allCoinsList.js";
import marketcapData from "./slices/marketcapData.js";
import coinData from "./slices/coinData.js";
import coinChart from "./slices/coinChart.js";
import versusChart from "./slices/versusChart.js";
import favoriteList from "./slices/favoriteList.js";
import visibilityFilter from "./slices/visibilityFilter.js";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        trendingCoinList: trendingCoinList,
        allCoinsList: allCoinsList,
        marketcapData: marketcapData,
        coinData: coinData,
        coinChart: coinChart,
        versusChart: versusChart,
        favoriteList: favoriteList,
        visibilityFilter: visibilityFilter,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
