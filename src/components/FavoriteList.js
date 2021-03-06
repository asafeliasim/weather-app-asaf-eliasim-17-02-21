import React from 'react';
import {useSelector} from "react-redux";
import FavoriteItem from "./FavoriteItem";

//fadeInRight
import {fadeInRight} from 'react-animations';
import styled, { keyframes } from 'styled-components';
//<h2 className="header_logo-title">Herolo app</h2>
const fadeAnimation = keyframes`${fadeInRight}`;
const FadeList = styled.div`
    animation: 2s ${fadeAnimation};
`
const FavoriteList = () => {

    const userPref = useSelector(state => state.userPref);
    const {favorites} = userPref;
    console.log(favorites)
    if(favorites.length === 0){
        return <div className="favorite_none">
            <h1>There are no cities in your favorites list.</h1>
        </div>
    }
    
    return <FadeList className="favorite_list">
        {
            favorites && favorites.map(location =>
                <FavoriteItem key={location.key} location={location}/>
            )
        }

    </FadeList>
}

export default FavoriteList;
