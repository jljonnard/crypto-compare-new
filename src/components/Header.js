import React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as visibilityFilter from "../store/slices/visibilityFilter";

const Header = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.visibilityFilter);

    const handleClick = (newFilter) => {
        dispatch(visibilityFilter.set(newFilter));
    };

    return (
        <header className="only-on-small-screen alone-header">
            {filter === "NAVIGATION" ? (
                <div onClick={() => handleClick("HOME")}>
                    <i className="material-icons clickable">close</i>
                </div>
            ) : (
                <div onClick={() => handleClick("NAVIGATION")}>
                    <i className="material-icons clickable">menu</i>
                </div>
            )}
            <div
                className="clickable inner"
                onClick={() => handleClick("HOME")}
            >
                <h1>Crypto Compare</h1>
            </div>
        </header>
    );
};

export default Header;
