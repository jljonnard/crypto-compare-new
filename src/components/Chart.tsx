import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";

import { buttons } from "../models/chartButtons";
import { getCoinChart } from "../store/selectors/getCoinChart";

import * as coinChartActions from "../store/slices/coinChart";
import { RootState } from "../store/store";

interface ChartProps {
    id: string;
}

const Chart = ({ id }: ChartProps) => {
    const dispatch = useDispatch();
    const coinChart = useSelector(getCoinChart);
    const days = useSelector((state: RootState) => state.chartDays);
    const [buttonSelected, setButtonSelected] = useState(days);

    useEffect(() => {
        dispatch(coinChartActions.get(id, buttonSelected));
    }, [id, dispatch, buttonSelected]);

    return (
        <div className="chart box">
            <div className="left container">
                {buttons.map((button) => (
                    <div
                        key={button.days}
                        id={"button-" + button.legend}
                        className={`small button ${
                            button.days === buttonSelected && "selected"
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
                        labels: coinChart[0],
                        datasets: [
                            {
                                data: coinChart[1],
                                backgroundColor: "rgba(159,107,192,0.25)",
                                borderColor: "rgba(159,107,192,0.6)",
                                hoverBackgroundColor: "rgba(159,107,192,1)",
                                pointBackgroundColor: "rgba(0,0,0,0)",
                                pointBorderColor: "rgba(0,0,0,0)",
                            },
                        ],
                    }}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        legend: { display: false },
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

export default Chart;
