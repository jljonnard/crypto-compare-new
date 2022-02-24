import React from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchBar from "./SearchBar.js";
import Comparator from "./Comparator.js";
import VersusChart from "./VersusChart.js";
import Favorite from "./Favorite.js";

import * as coinDataActions from "../store/slices/coinData";
import * as visibilityFilter from "../store/slices/visibilityFilter";

const Versus = () => {
    const dispatch = useDispatch();
    const coinData = useSelector((state) => state.coinData);

    const handleClick = (coin) => {
        dispatch(visibilityFilter.set("DISPLAY_ONE_COIN"));
        dispatch(coinDataActions.fetch(coin));
    };
    return (
        <div className="main sub container">
            <div className="container">
                <SearchBar fetchSearch={coinDataActions.fetch} id="left" />
                <SearchBar
                    fetchSearch={coinDataActions.fetch}
                    right={true}
                    id="right"
                    placeholder="La comparer à cette crypto"
                />
            </div>
            {coinData.left && (
                <div className="container box">
                    <div className="coin-wrap">
                        <div className="wrapper title">
                            <img
                                className="pic only-on-small-screen"
                                src={coinData.left.logo.small}
                                alt={coinData.left.name}
                            ></img>
                            <h2
                                className="clickable"
                                onClick={() => handleClick(coinData.left.id)}
                            >
                                {coinData.left.name}
                            </h2>
                            <Favorite coin={coinData.left} origin="versus" />
                        </div>
                        <img
                            className="only-on-big-screen"
                            src={coinData.left.logo.large}
                            alt={coinData.left.name}
                        ></img>
                    </div>
                    {coinData.right && (
                        <div>
                            <Comparator
                                title="MarketCap"
                                leftData={coinData.left.marketcap}
                                rightData={coinData.right.marketcap}
                                add="M$"
                            />
                            <Comparator
                                title="Score communautaire"
                                leftData={coinData.left.communityScore}
                                rightData={coinData.right.communityScore}
                                add="/ 20"
                            />
                            <Comparator
                                title="Sentiment haussier"
                                leftData={coinData.left.sentimentUp}
                                rightData={coinData.right.sentimentUp}
                                add="%"
                            />
                            <Comparator
                                title="Variation sur 1 jour"
                                leftData={coinData.left.priceChange24h}
                                rightData={coinData.right.priceChange24h}
                                add="%"
                            />
                            <Comparator
                                title="Variation sur 1 semaine"
                                leftData={coinData.left.priceChange7d}
                                rightData={coinData.right.priceChange7d}
                                add="%"
                            />
                            <Comparator
                                title="Variation sur 1 mois"
                                leftData={coinData.left.priceChange30d}
                                rightData={coinData.right.priceChange30d}
                                add="%"
                            />
                            <Comparator
                                title="Variation sur 1 an"
                                leftData={coinData.left.priceChange1y}
                                rightData={coinData.right.priceChange1y}
                                add="%"
                            />
                        </div>
                    )}
                    {coinData.right && (
                        <div className="coin-wrap">
                            <div className="wrapper title">
                                <img
                                    className="pic only-on-small-screen"
                                    src={coinData.right.logo.small}
                                    alt={coinData.right.name}
                                ></img>
                                <h2
                                    className="clickable"
                                    onClick={() =>
                                        handleClick(coinData.right.id)
                                    }
                                >
                                    {coinData.right.name}
                                </h2>
                                <Favorite
                                    coin={coinData.right}
                                    origin="versus"
                                />
                            </div>
                            <img
                                className="only-on-big-screen"
                                src={coinData.right.logo.large}
                                alt={coinData.right.name}
                            ></img>
                        </div>
                    )}
                </div>
            )}
            {coinData && coinData.right && (
                <VersusChart left={coinData.left} right={coinData.right} />
            )}
        </div>
    );
};

export default Versus;
