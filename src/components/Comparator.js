import React from "react";

import "../css/Comparator.css";

const Comparator = ({ leftData, rightData, title, add }) => {
    return (
        <div className="comparator-wrap">
            <h6 className="comparator-title">{title}</h6>
            <div className="comparator">
                <div
                    className={`left comparator-element ${
                        leftData > rightData && "main"
                    }`}
                >
                    {leftData} {add}
                </div>
                <div
                    className={`right comparator-element ${
                        leftData < rightData && "main"
                    }`}
                >
                    {rightData} {add}
                </div>
            </div>
        </div>
    );
};

export default Comparator;
