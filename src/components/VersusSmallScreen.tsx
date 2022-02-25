import React from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchBar from "./SearchBar";
import Comparator from "./Comparator";
import VersusChart from "./VersusChart";
import Favorite from "./Favorite";

import * as coinDataActions from "../store/slices/coinData";
import * as visibilityFilter from "../store/slices/visibilityFilter";
import { RootState } from "../store/store";

const VersusSmallScreen = () => {
    const dispatch = useDispatch();
    const coinData = useSelector((state: RootState) => state.coinData);

    const handleClick = (coin: string) => {
        dispatch(visibilityFilter.set("DISPLAY_ONE_COIN"));
        dispatch(coinDataActions.fetch(coin));
    };
    return (
        <div className="main sub container a">
            <div className="container">
                <SearchBar id="left" />
                <SearchBar
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
                            <Favorite coin={coinData.left} />
                        </div>
                    </div>
                    <h2>VS</h2>
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
                                <Favorite coin={coinData.right} />
                            </div>
                        </div>
                    )}
                    {coinData.right && (
                        <div className="comparators">
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
                </div>
            )}
            {coinData && coinData.right && (
                <VersusChart left={coinData.left} right={coinData.right} />
            )}
        </div>
    );
};

export default VersusSmallScreen;
