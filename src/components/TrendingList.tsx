import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as visibilityFilter from "../store/slices/visibilityFilter";
import * as trendingList from "../store/slices/trendingList";
import * as coinData from "../store/slices/coinData";
import { TrendingListItem } from "../models/TrendingList";
import { getTrendingList } from "../store/selectors/getTrendingList";

const TrendingList = () => {
    const coinList = useSelector(getTrendingList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(trendingList.get());
    }, [dispatch]);

    const handleClick = (coin: string) => {
        dispatch(coinData.get(coin));
        dispatch(visibilityFilter.set("DISPLAY_ONE_COIN"));
    };

    return (
        <div className="vertical container box limit">
            <h4>Tendances</h4>
            <table>
                <tbody>
                    {coinList.map((coin: TrendingListItem, id: number) => (
                        <tr
                            key={coin.id}
                            className="clickable"
                            id={"trendingCoin-" + id.toString()}
                            onClick={() => handleClick(coin.id)}
                        >
                            <td>
                                <div className="left container">
                                    <img
                                        className="pic"
                                        src={coin.logo}
                                        alt={coin.name}
                                    ></img>
                                    <p>{coin.name}</p>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TrendingList;
