import React from "react";

interface PercentageProps {variation: number}

const Percentage = ({ variation }: PercentageProps) => {
    return (
        <div
            className={`percentage ${variation < 0 ? "negative" : "positive"}`}
        >
            {variation} %
        </div>
    );
};

export default Percentage;
