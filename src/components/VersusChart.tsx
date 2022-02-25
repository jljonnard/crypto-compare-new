import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";

import { buttons } from "../models/chartButtons";
import { CoinData } from "../models/CoinData";

import * as versusChart from "../store/slices/versusChart";
import { RootState } from "../store/store";

interface VersusChartProps {
    left: CoinData;
    right: CoinData;
}

const VersusChart = ({ left, right }: VersusChartProps) => {
    const dispatch = useDispatch();
    const coinChart = useSelector((state: RootState) => state.versusChart);

    const [buttonSelected, setButtonSelected] = useState(7);

    useEffect(() => {
        dispatch(versusChart.get(left.id, right.id, buttonSelected));
    }, [left.id, right.id, buttonSelected, dispatch]);

    return (
        <div className="box chart">
            <div className="left container">
                {buttons.map((button) => (
                    <div
                        key={button.days}
                        className={`small button ${
                            button.days === buttonSelected &&
                            "selected"
                        }`}
                        onClick={() => setButtonSelected(button.days)}
                    >
                        {button.legend}
                    </div>
                ))}
            </div>
            {coinChart && (
                <Line
                    data={{
                        labels: coinChart.time.slice(),
                        datasets: [
                            {
                                label: left.name,
                                data: coinChart.leftPrice.slice(),
                                backgroundColor: "rgba(45,85,201,0)",
                                borderColor: "rgba(45,85,201,0.6)",
                                hoverBackgroundColor: "rgba(240,150,20,0.4)",
                                pointBackgroundColor: "rgba(0,0,0,0)",
                                pointBorderColor: "rgba(0,0,0,0)",
                            },
                            {
                                label: right.name,
                                data: coinChart.rightPrice.slice(),
                                backgroundColor: "rgba(145,85,201,0)",
                                borderColor: "rgba(245,85,21,0.6)",
                                hoverBackgroundColor: "rgba(240,150,20,0.4)",
                                pointBackgroundColor: "rgba(0,0,0,0)",
                                pointBorderColor: "rgba(0,0,0,0)",
                            },
                        ],
                    }}
                    height={200}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        legend: { display: true },
                        scales: {
                            xAxes: [
                                {
                                    ticks: {
                                        maxTicksLimit: 15,
                                    },
                                    gridLines: { display: false },
                                },
                            ],
                            yAxes: [
                                {
                                    ticks: {
                                        maxTicksLimit: 10,
                                    },
                                    gridLines: { display: false },
                                },
                            ],
                        },
                    }}
                />
            )}
        </div>
    );
};

export default VersusChart;
