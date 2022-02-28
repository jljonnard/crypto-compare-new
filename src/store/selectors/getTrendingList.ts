import { createSelector } from "@reduxjs/toolkit";
import { getRawTrendingList } from "../slices/trendingList"

export const getTrendingList  = createSelector(
    [getRawTrendingList],
    (trendingList) =>{
        console.log(trendingList)
        return trendingList.coins.map((coin) => ({
            id: coin.item.id,
            name: coin.item.name,
            logo: coin.item.thumb,
        }))}
);
