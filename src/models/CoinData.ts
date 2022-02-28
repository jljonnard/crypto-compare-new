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
    marketCapRank: number;
    categories: (string | null)[];
    communityScore: number;
    sentimentUp: number;
    marketCap: number;
    priceChange24h: number;
    priceChange7d: number;
    priceChange30d: number;
    priceChange1y: number;
}