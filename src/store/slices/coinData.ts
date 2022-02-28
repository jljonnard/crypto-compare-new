import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CoinData } from "../../models/CoinData";
import { CoinDataResponse } from "../../models/CoinDataResponse";

type CoinDataState = {
    left: CoinData | null,
    right: CoinData | null,
};

const INITIAL_STATE_COINDATA: CoinDataState = 
    { left: null, right: null }
;

const { actions, reducer } = createSlice({
    name: "coinData",
    initialState: INITIAL_STATE_COINDATA,
    reducers: {
        fetch: {
            prepare: (coin, right = false) => ({
                payload: {
                    coin,
                    right,
                },
            }),
            reducer: (state) => state,
        },
        get: {
            prepare: (response, right) => ({
                payload: { right, data: response.data },
            }),
            reducer: (state, action: PayloadAction<{right: boolean; data: CoinDataResponse}>) => {
                if (action.payload.right) {
                    return {
                        ...state,
                        right: {
                            id: action.payload.data.id,
                            symbol: action.payload.data.symbol,
                            name: action.payload.data.name,
                            logo: action.payload.data.image,
                            price: action.payload.data.market_data.current_price
                                .eur,
                            description: action.payload.data.description.fr,
                            marketCapRank: action.payload.data.market_cap_rank,
                            categories: action.payload.data.categories,
                            communityScore:
                                Math.round(
                                    action.payload.data.community_score * 2
                                ) / 10,
                            sentimentUp:
                                action.payload.data
                                    .sentiment_votes_up_percentage,
                            marketCap: Math.round(
                                action.payload.data.market_data.market_cap.eur /
                                    1000000
                            ),
                            priceChange24h:
                                Math.round(
                                    action.payload.data.market_data
                                        .price_change_percentage_24h * 100
                                ) / 100,
                            priceChange7d:
                                Math.round(
                                    action.payload.data.market_data
                                        .price_change_percentage_7d * 100
                                ) / 100,
                            priceChange30d:
                                Math.round(
                                    action.payload.data.market_data
                                        .price_change_percentage_30d * 100
                                ) / 100,
                            priceChange1y:
                                Math.round(
                                    action.payload.data.market_data
                                        .price_change_percentage_1y * 100
                                ) / 100,
                        },
                    };
                } else {
                    return {
                        ...state,
                        left: {
                            id: action.payload.data.id,
                            symbol: action.payload.data.symbol,
                            name: action.payload.data.name,
                            logo: action.payload.data.image,
                            price: action.payload.data.market_data.current_price
                                .eur,
                            description: action.payload.data.description.fr,
                            marketCapRank: action.payload.data.market_cap_rank,
                            categories: action.payload.data.categories,
                            communityScore:
                                Math.round(
                                    action.payload.data.community_score * 2
                                ) / 10,
                            sentimentUp:
                                action.payload.data
                                    .sentiment_votes_up_percentage,
                            marketCap: Math.round(
                                action.payload.data.market_data.market_cap.eur /
                                    1000000
                            ),
                            priceChange24h:
                                Math.round(
                                    action.payload.data.market_data
                                        .price_change_percentage_24h * 100
                                ) / 100,
                            priceChange7d:
                                Math.round(
                                    action.payload.data.market_data
                                        .price_change_percentage_7d * 100
                                ) / 100,
                            priceChange30d:
                                Math.round(
                                    action.payload.data.market_data
                                        .price_change_percentage_30d * 100
                                ) / 100,
                            priceChange1y:
                                Math.round(
                                    action.payload.data.market_data
                                        .price_change_percentage_1y * 100
                                ) / 100,
                        },
                    };
                }
            },
        },
    },
});

export const { fetch, get } = actions;

export default reducer;