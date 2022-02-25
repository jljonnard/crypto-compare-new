import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TrendingList from "./TrendingList";
import MarketCap from "./MarketCap";
import SearchBar from "./SearchBar";
import CoinInfos from "./CoinInfos";
import Versus from "./Versus";
import Navigation from "./Navigation";
import VersusSmallScreen from "./VersusSmallScreen";

import * as coinDataActions from "../store/slices/coinData";
import * as allCoinsList from "../store/slices/allCoinsList";
import { RootState } from "../store/store";

const MainSection = () => {
    const dispatch = useDispatch();
    const coinData = useSelector((state: RootState) => state.coinData.left);
    const filter = useSelector((state: RootState) => state.visibilityFilter);

    useEffect(() => {
        dispatch(allCoinsList.get());
    }, [dispatch]);

    return (
        <div className="page-wrap">
            {filter === "HOME" && (
                <div>
                    <SearchBar />
                    <div className="main container">
                        <MarketCap />
                        <TrendingList />
                    </div>
                </div>
            )}
            {filter === "DISPLAY_ONE_COIN" && coinData && (
                <div>
                    <SearchBar />
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
