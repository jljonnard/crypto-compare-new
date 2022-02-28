import { createSelector } from "@reduxjs/toolkit";
import { getRawVersusChart } from "../slices/versusChart";
import { getChartDaysNumber } from "../slices/chartDays";
import { formatChartDate } from "../../specificFunctions/formatChartDate";
import { CoinChartResponse } from "../../models/CoinChartResponse";

export const getVersusChart = createSelector(
    [getRawVersusChart, getChartDaysNumber],
    (versusChart, days) => ({
        time: versusChart[0].prices.map(formatChartDate(days)),
        leftPrice: versusChart[0].prices.map(
            formatVersusPrices(versusChart[0])
        ),
        rightPrice: versusChart[1].prices.map(
            formatVersusPrices(versusChart[1])
        ),
    })
);

const formatVersusPrices =
    (versusChart: CoinChartResponse) => (price: number[]) =>
        Math.round(
            ((price[1] - versusChart.prices[0][1]) / versusChart.prices[0][1]) *
                10000
        ) / 100;
