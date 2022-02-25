import coingeckoAPI from "./coingeckoAPI";

export const getAllCoinsList = () => coingeckoAPI.get("/coins/list");
export const getTrendingList = () => coingeckoAPI.get("/search/trending");
export const getMarketCap = () => coingeckoAPI.get("/global");

export const getCoinData = (coin: string) =>
    coingeckoAPI.get("/coins/" + coin, {
        params: {
            localization: true,
            tickers: false,
            market_data: true,
            community_data: false,
            developer_data: false,
            sparkline: false,
        },
    });

interface GetCoinChartParams {
    coin: string;
    days: number;
}
export const getCoinChart = ({ coin, days }: GetCoinChartParams) =>
    coingeckoAPI.get("/coins/" + coin + "/market_chart", {
        params: {
            vs_currency: "eur",
            days: days,
        },
    });
