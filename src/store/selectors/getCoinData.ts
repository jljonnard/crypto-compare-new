import { createSelector } from "@reduxjs/toolkit";
import { CoinDataResponse } from "../../models/CoinDataResponse";
import { getRawCoinData } from "../slices/coinData";

export const getCoinData = createSelector([getRawCoinData], (coinData) => ({
    left: coinData.left && formatCoin(coinData.left),
    right: coinData.right && formatCoin(coinData.right),
}));

const formatCoin = (coin: CoinDataResponse) => ({
    id: coin.id,
    symbol: coin.symbol,
    name: coin.name,
    logo: coin.image,
    price: coin.market_data.current_price.eur,
    description: coin.description.fr,
    marketCapRank: coin.market_cap_rank,
    categories: coin.categories,
    communityScore: Math.round(coin.community_score * 2) / 10,
    sentimentUp: coin.sentiment_votes_up_percentage,
    marketCap: Math.round(coin.market_data.market_cap.eur / 1000000),
    priceChange24h:
        Math.round(coin.market_data.price_change_percentage_24h * 100) / 100,
    priceChange7d:
        Math.round(coin.market_data.price_change_percentage_7d * 100) / 100,
    priceChange30d:
        Math.round(coin.market_data.price_change_percentage_30d * 100) / 100,
    priceChange1y:
        Math.round(coin.market_data.price_change_percentage_1y * 100) / 100,
});