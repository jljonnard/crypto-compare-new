import React from "react";
import { useSelector } from "react-redux";

import Percentage from "./Percentage";
import Chart from "./Chart";
import Favorite from "./Favorite";
import { RootState } from "../store/store";

const CoinInfos = () => {
    const coinData = useSelector((state: RootState) => state.coinData.left);

    return (
        <div className="main sub container">
            <div className="container">
                <div className="wrapper">
                    <img
                        className="pic"
                        src={coinData.logo.small}
                        alt={coinData.name}
                    ></img>
                    <h2>
                        {coinData.name} (
                        {coinData.symbol.toUpperCase()})
                    </h2>
                    <Favorite coin={coinData} />
                </div>
                <h2>{coinData.price} €</h2>
            </div>
            <div className="container">
                <div className="box">
                    <h4>Informations diverses</h4>
                    <table>
                        <tbody>
                            <tr>
                                <td>Classement : </td>
                                <td>{coinData.marketCapRank}</td>
                            </tr>
                            <tr>
                                <td>Score de la communauté : </td>
                                <td>
                                    {coinData.communityScore} / 20
                                </td>
                            </tr>
                            <tr>
                                <td>Sentiment haussier : </td>
                                <td>{coinData.sentimentUp} %</td>
                            </tr>
                            <tr>
                                <td>Catégorie : </td>
                                <td>{coinData.categories[0]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="box">
                    <h4>Variations de prix</h4>
                    <table>
                        <tbody>
                            <tr>
                                <td>Sur 1 jour : </td>
                                <td>
                                    <Percentage
                                        variation={
                                            coinData.priceChange24h
                                        }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Sur 1 semaine : </td>
                                <td>
                                    <Percentage
                                        variation={
                                            coinData.priceChange7d
                                        }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Sur 1 mois : </td>
                                <td>
                                    <Percentage
                                        variation={
                                            coinData.priceChange30d
                                        }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Sur 1 an : </td>
                                <td>
                                    <Percentage
                                        variation={
                                            coinData.priceChange1y
                                        }
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="container">
                <Chart id={coinData.id} />
            </div>
        </div>
    );
};

export default CoinInfos;
