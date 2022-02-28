import { createSelector } from "@reduxjs/toolkit";
import { getRawMarketCapData } from "../slices/marketCapData";

export const getMarketCapData = createSelector(
    [getRawMarketCapData],
    (marketCapData) => {
        console.log(marketCapData);
        return {
            coins: Object.keys(marketCapData),
            percentages: Object.values(marketCapData)
                .map((percentage) => Math.round(percentage * 100) / 100)
                .concat([
                    Math.round(
                        (100 -
                            Object.values(marketCapData).reduce(
                                (x, y) => x + y
                            )) *
                            100
                    ) / 100,
                ]),
        };
    }
);
