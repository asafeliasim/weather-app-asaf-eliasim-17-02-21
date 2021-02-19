import React from 'react';
import {useSelector} from "react-redux";
import FavoriteItem from "./FavoriteItem";

const FavoriteList = () => {

    const userPref = useSelector(state => state.userPref);
    const {favorites} = userPref;
    console.log(favorites)
    if(favorites.length === 0){
        return <h1>There are no City in the list</h1>
    }
    
    return <div className="favorite_list">
        {
            favorites && favorites.map(location =>
                <FavoriteItem key={location.key} location={location}/>
            )
        }

    </div>
}

export default FavoriteList;
