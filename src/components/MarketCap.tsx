import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Doughnut } from "react-chartjs-2";

import * as marketCapData from "../store/slices/marketCapData";
import { RootState } from "../store/store";
import { AllCoinsListItem } from "../models/AllCoinsListResponse";
import { getMarketCapData } from "../store/selectors/getMarketCapData";

const MarketCap = () => {
    const dispatch = useDispatch();
    const allCoinsList = useSelector((state: RootState) => state.allCoinsList);
    const marketCaps = useSelector(getMarketCapData);

    useEffect(() => {
        dispatch(marketCapData.get());
    }, [dispatch]);

    const getCoinBySymbol = (symbol: string) => {
        const name = allCoinsList.find(
            (coin: AllCoinsListItem) => coin.symbol === symbol
        ).name;

        if (name !== -1) {
            return name;
        } else {
            return "Chargement...";
        }
    };

    return (
        <div className="vertical container box doughnut">
            <h4>MarketCap</h4>
            <Doughnut
                data={{
                    labels: marketCaps.coins
                        .map((coin: string) => {
                            return getCoinBySymbol(coin);
                        })
                        .concat(["Autres"]),
                    datasets: [
                        {
                            data: marketCaps.percentages.slice(),
                            backgroundColor: [
                                "rgba(240,130,20,0.4)",
                                "rgba(70,25,70,0.4)",
                                "rgba(45,220,155,0.4)",
                                "rgba(0,0,0,0.4)",
                                "rgba(145,220,50,0.4)",
                                "rgba(230,210,100,0.4)",
                                "rgba(20,85,201,0.4)",
                                "rgba(245,55,150,0.4)",
                                "rgba(145,145,145,0.4)",
                                "rgba(200,180,60,0.4)",
                                "rgba(190,180,210,0.4)",
                            ],
                        },
                    ],
                }}
                options={{
                    maintainAspectRatio: false,
                    responsive: true,
                    legend: { display: true },
                }}
            />
        </div>
    );
};

export default MarketCap;
