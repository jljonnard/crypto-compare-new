export type CoinData = {
    id: string;
    symbol: string;
    name: string;
    logo: {
        thumb: string;
        small: string;
        large: string;
    };
    price: number;
    description: string;
    marketcapRank: number;
    categories: (string | null)[];
    communityScore: number;
    sentimentUp: number;
    marketcap: number;
    priceChange24h: number;
    priceChange7d: number;
    priceChange30d: number;
    priceChange1y: number;
}