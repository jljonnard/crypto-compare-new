import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FavoriteList from "./FavoriteList";

import * as visibilityFilter from "../store/slices/visibilityFilter";
import { RootState } from "../store/store";

const menu = ["Accueil", "Versus", "DeFi"];

const Navigation = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state: RootState) => state.visibilityFilter);

    const [areSelected, setAreSelected] = useState([true, false, false]);

    useEffect(() => {
        if (filter === "DISPLAY_ONE_COIN") {
            setAreSelected([false, false, false]);
        }
        const navigation: HTMLElement | null = document.querySelector("nav");
        if(navigation) {
            if (filter === "NAVIGATION") {
                navigation.style.display = "block";
            } else if (window.innerWidth < 980) {
                navigation.style.display = "none";
            }
        }
    }, [filter]);

    const handleClick = (event: BaseSyntheticEvent) => {
        switch (event.target.innerHTML) {
            case "Versus":
                dispatch(visibilityFilter.set("DISPLAY_VERSUS"));
                setAreSelected([false, true, false]);
                break;
            case "DeFi":
                dispatch(visibilityFilter.set("HOME"));
                setAreSelected([false, false, true]);
                break;
            default:
                dispatch(visibilityFilter.set("HOME"));
                setAreSelected([true, false, false]);
        }
    };

    return (
        <nav className="only-on-big-screen">
            <header className="nav-header">
                <div className="clickable inner" onClick={handleClick}>
                    <h1>Crypto Compare</h1>
                </div>
            </header>
            <div className="nav-wrapper">
                {menu.map((element, id) => (
                    <div
                        key={element}
                        className={`nav-element clickable ${
                            areSelected[id] && "selected"
                        }`}
                        onClick={handleClick}
                    >
                        {element}
                    </div>
                ))}
            </div>
            <FavoriteList />
        </nav>
    );
};

export default Navigation;
