import { createSelector } from "@reduxjs/toolkit";
import { getSixDigitsOnly } from "../../specificFunctions/getSixDigits";
import { getRawCoinChart } from "../slices/coinChart";
import { getChartDaysNumber } from "../slices/chartDays";
import { formatChartDate } from "../../specificFunctions/formatChartDate";

export const getCoinChart = createSelector(
    [getRawCoinChart, getChartDaysNumber],
    (coinChart, days) => [
        coinChart.prices.map(formatChartDate(days)),
        coinChart.prices.map((price) => getSixDigitsOnly(price[1])),
    ]
);
