import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as favoriteListActions from "../store/slices/favoriteList"

const Favorite = ({ coin }) => {
    const dispatch = useDispatch();
    const favoriteList = useSelector((state) => state.favoriteList);

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        let flag = false;
        favoriteList.forEach((favoriteCoin) => {
            if (coin.id === favoriteCoin.id) {
                flag = true;
            }
        });
        setIsFavorite(flag);
    }, [coin.id, favoriteList]);

    const handleClick = () => {
        if (isFavorite) {
            dispatch(favoriteListActions.remove(coin));
        } else {
            dispatch(favoriteListActions.add(coin));
        }
        setIsFavorite(!isFavorite);
    };

    return (
        <div onClick={handleClick}>
            {isFavorite ? (
                <i className="material-icons star clickable">star</i>
            ) : (
                <i className="material-icons star clickable">star_border</i>
            )}
        </div>
    );
};

export default Favorite;
