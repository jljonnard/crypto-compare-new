import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TrendingList from "./TrendingList.js";
import MarketCap from "./MarketCap.js";
import SearchBar from "./SearchBar.js";
import CoinInfos from "./CoinInfos.js";
import Versus from "./Versus.js";
import Navigation from "./Navigation.js";
import VersusSmallScreen from "./VersusSmallScreen.js";

import * as coinDataActions from "../store/slices/coinData";
import * as allCoinsList from "../store/slices/allCoinsList";

const MainSection = () => {
    const dispatch = useDispatch();
    const coinData = useSelector((state) => state.coinData.left);
    const filter = useSelector((state) => state.visibilityFilter);

    useEffect(() => {
        dispatch(allCoinsList.get());
    }, [dispatch]);

    return (
        <div className="page-wrap">
            {filter === "HOME" && (
                <div>
                    <SearchBar fetchSearch={coinDataActions.fetch} />
                    <div className="main container">
                        <MarketCap />
                        <TrendingList />
                    </div>
                </div>
            )}
            {filter === "DISPLAY_ONE_COIN" && coinData && (
                <div>
                    <SearchBar fetchSearch={coinDataActions.fetch} />
                    <CoinInfos />
                </div>
            )}
            {filter === "DISPLAY_VERSUS" && (
                <div>
                    {window.innerWidth > 720 ? (
                        <Versus />
                    ) : (
                        <VersusSmallScreen />
                    )}
                </div>
            )}
            {filter === "NAVIGATION" && <Navigation />}
        </div>
    );
};

export default MainSection;
