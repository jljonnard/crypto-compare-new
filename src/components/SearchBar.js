import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as visibilityFilter from "../store/slices/visibilityFilter";

import "../css/SearchBar.css";

const SearchBar = ({
    id = "center",
    fetchSearch,
    right = false,
    placeholder = "Rechercher une crypto",
}) => {
    const dispatch = useDispatch();
    const allCoinsList = useSelector((state) => state.allCoinsList);

    const [results, setResults] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedResult, setSelectedResult] = useState(-1);

    useEffect(() => {
        document.addEventListener("click", handleAllClicks);
        document.addEventListener("keydown", handleKeyboard);
        return () => {
            document.removeEventListener("click", handleAllClicks);
            document.removeEventListener("keydown", handleKeyboard);
        };
    }, []);

    const handleAllClicks = (event) => {
        if (event.target.className !== "searchBar") {
            reset();
        }
    };

    const handleKeyboard = (event) => {
        if (event.key === "Tab") {
            reset();
        }

        if (results.length > 0) {
            switch (event.key) {
                case "ArrowDown":
                    if (selectedResult < results.length - 1) {
                        setSelectedResult(selectedResult + 1);
                    }
                    break;
                case "ArrowUp":
                    if (selectedResult > -1) {
                        setSelectedResult(selectedResult - 1);
                    }
                    break;
                case "Enter":
                    if (selectedResult > -1) {
                        handleClick(results[selectedResult].id);
                    } else {
                        handleClick(results[0].id);
                    }
                    break;
                default:
                    setSelectedResult(-1);
            }
        }
    };

    const resizeResults = (search) => {
        //fonction qui permet de donner aux résultats la même largeur que le champ input
        const wrapper = document.querySelector("#searchWrapper-" + id);
        let resultsSpace = document.querySelector(".results." + id);

        if (resultsSpace) {
            resultsSpace.style.width = wrapper.offsetWidth + "px";
            resultsSpace.style.top =
                wrapper.offsetTop + wrapper.offsetHeight + "px";
            resultsSpace.style.left = wrapper.offsetLeft + "px";

            if (search.length > 2) {
                resultsSpace.style.display = "block";
            } else {
                resultsSpace.style.display = "none";
            }
        }
    };

    const handleSearchUpdate = (event) => {
        let searchResults = [];
        let searchId = 0;
        resizeResults(event.target.value);

        if (event.target.value.length > 2) {
            while (searchId < allCoinsList.length && searchResults.length < 7) {
                if (
                    allCoinsList[searchId].symbol.toUpperCase() ===
                    event.target.value.toUpperCase()
                ) {
                    searchResults.unshift({
                        id: allCoinsList[searchId].id,
                        name: allCoinsList[searchId].name,
                    });
                } else if (
                    allCoinsList[searchId].name
                        .toUpperCase()
                        .startsWith(event.target.value.toUpperCase()) &&
                    searchResults.length < 6
                ) {
                    searchResults.push({
                        id: allCoinsList[searchId].id,
                        name: allCoinsList[searchId].name,
                    });
                }
                searchId++;
            }
            setResults(searchResults);
        } else {
            setResults([]);
        }
        setSearch(event.target.value);
        setSelectedResult(-1);
    };

    const handleClick = (coin) => {
        reset();
        dispatch(fetchSearch(coin, right));
        if (id === "center") {
            dispatch(visibilityFilter.set("DISPLAY_ONE_COIN"));
        }
    };

    const reset = () => {
        setResults([]);
        setSearch("");
        setSelectedResult(-1);
        resizeResults("");
    };

    return (
        <div className="vertical container">
            <input
                className="searchBar"
                id={`searchWrapper-${id}`}
                type="text"
                placeholder={placeholder}
                onChange={handleSearchUpdate}
                value={search}
            ></input>
            <div className={`results ${id}`}>
                {results.map((result, resultId) => (
                    <div
                        className={`result ${
                            selectedResult === resultId && "selected"
                        }`}
                        key={result.id + id}
                        onClick={() => handleClick(result.id)}
                    >
                        {result.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
