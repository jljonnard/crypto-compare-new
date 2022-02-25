import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Percentage from "./Percentage";

import * as visibilityFilter from "../store/slices/visibilityFilter";
import * as coinData from "../store/slices/coinData";
import { RootState } from "../store/store";
import { CoinData } from "../models/CoinData";

const FavoriteList = () => {
    const dispatch = useDispatch();
    const favoriteList = useSelector((state: RootState) => state.favoriteList);

    const handleClick = (coin: string) => {
        dispatch(coinData.fetch(coin));
        dispatch(visibilityFilter.set("DISPLAY_ONE_COIN"));
    };
    return (
        <div className="main sub container">
            <div className="inverted box favList">
                <h4>Favoris</h4>
                <table>
                    <tbody>
                        {favoriteList.map((coin: CoinData) => (
                            <tr
                                key={coin.id}
                                className="clickable"
                                onClick={() => handleClick(coin.id)}
                            >
                                <td>
                                    <div className="left container">
                                        <img
                                            className="pic"
                                            src={coin.logo.thumb}
                                            alt={coin.name}
                                        ></img>
                                        <p title={coin.name}>
                                            {coin.symbol.toUpperCase()}
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <Percentage
                                        variation={coin.priceChange24h}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FavoriteList;
