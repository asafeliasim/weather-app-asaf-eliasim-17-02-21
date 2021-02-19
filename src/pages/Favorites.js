import React from 'react';
import {useSelector} from 'react-redux';
import FavoriteList from "../components/FavoriteList";
const Favorites = () => {
    const userPref = useSelector(state=>state.userPref);

    return <div>
       <FavoriteList favorites={userPref.favorites}/>
    </div>
}
export default Favorites;
