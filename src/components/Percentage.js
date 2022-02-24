import React from "react";

const Percentage = ({ variation }) => {
    return (
        <div
            className={`percentage ${variation < 0 ? "negative" : "positive"}`}
        >
            {variation} %
        </div>
    );
};

export default Percentage;
