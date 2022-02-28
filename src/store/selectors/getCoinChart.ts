import { createSelector } from "@reduxjs/toolkit";
import { getSixDigitsOnly } from "../../specificFunctions/getSixDigits";
import { getRawCoinChart } from "../slices/coinChart";
import { getChartDaysNumber } from "../slices/chartDays";

export const getCoinChart = createSelector(
    [getRawCoinChart, getChartDaysNumber],
    (coinChart, days) => [
        coinChart.prices.map(formatDate(days)),
        coinChart.prices.map((price) => getSixDigitsOnly(price[1])),
    ]
);

const formatDate = (days: number) => {
    switch (days) {
        case 1:
            return (time: number[]) => {
                const tempDate = new Date(time[0]);
                return tempDate.getHours().toString() + ":00";
            };
        case 7:
            return (time: number[]) => {
                const tempDate = new Date(time[0]);
                return (
                    tempDate.getDate().toString() +
                    " " +
                    tempDate.getHours().toString() +
                    ":00"
                );
            };
        case 30:
            return (time: number[]) => {
                const tempDate = new Date(time[0]);
                return tempDate.getDate().toString();
            };
        default:
            return (time: number[]) => {
                const tempDate = new Date(time[0]);
                return (
                    tempDate.getDate().toString() +
                    "/" +
                    (tempDate.getMonth() + 1).toString()
                );
            };
    }
};
