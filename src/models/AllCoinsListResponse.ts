export type AllCoinsListItem = { id: string; symbol: string; name: string };

export interface AllCoinsListResponse {
    data: {
        id: string;
        symbol: string;
        name: string;
    }[];
}
