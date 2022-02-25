import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CoinData } from "../models/CoinData";

import * as favoriteListActions from "../store/slices/favoriteList"
import { RootState } from "../store/store";

interface FavoriteProps {
    coin: CoinData
}

const Favorite = ({ coin }: FavoriteProps) => {
    const dispatch = useDispatch();
    const favoriteList = useSelector((state: RootState) => state.favoriteList);

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        let flag = false;
        favoriteList.forEach((favoriteCoin: CoinData) => {
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
