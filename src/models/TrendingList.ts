export type TrendingListItem = {
    id: string;
    name: string;
    logo: string;
};

export type TrendingListResponse = {
    coins: {
        item: {
            id: string;
            coin_id: number;
            name: string;
            symbol: string;
            market_cap_rank: number;
            thumb: string;
            small: string;
            large: string;
            slug: string;
            price_btc: number;
            score: number;
        };
    }[];
};
