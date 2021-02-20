import {
    ADD_TO_FAVORITE,
    IS_DARK_MODE,
    SET_LOCATION_BY_GEO,
    SET_LOCATION_FORECAST,
    REMOVE_FROM_FAVORITE,
    SET_HOMEPAGE_LINK,
    SET_TEMP_DEGREE,
    SET_ERROR_ALERT,
    REFRESH_ERROR_ALERT
} from "./constants";

console.log(JSON.parse(localStorage.getItem("favorites")));
let userPref = JSON.parse(localStorage.getItem("favorites"));



export const appReducer = (
    state={  
        isDark:false,
        isCel:false,
        homePage:true,
        currentLocation:null,
        weekForecast:[],
        loading:true,
        foreCastLoading:true},
    action)=>{

    const {type,payload} = action;
    switch (type) {
        case SET_HOMEPAGE_LINK:
            return{
                ...state,
                homePage: !state.homePage
            }
        case IS_DARK_MODE:
            return{
                ...state,
                isDark: !state.isDark
            }
        case SET_TEMP_DEGREE:
            return{
                ...state,
                isCel: !state.isCel
            }    
        case SET_LOCATION_BY_GEO:
            return{
                ...state,
                currentLocation: {
                    key: payload.key,
                    country:payload.country,
                    city:payload.city,
                    //favorite: state.favorites.length > 0 && state.favorites.map(location => location.key === state.currentLocation.key)
                },
                loading: false
            }
        case SET_LOCATION_FORECAST:
            return {
                ...state,
                weekForecast:payload,
                foreCastLoading: false
            }  
        default:
            return state;
    }
}

const userFav = userPref ? userPref : []
export const favoritesReducers = (state={favorites:userFav,loading:true},action) => {
    const {type,payload} = action;
   
    let newFavorites = [];
    switch(type){
        case ADD_TO_FAVORITE:
            console.log("payload: " , payload);
            newFavorites = state.favorites.concat(payload);
            console.log(newFavorites)
            localStorage.setItem("favorites",JSON.stringify(newFavorites));
            return{
                ...state,
                favorites: newFavorites,              
            }     
        case REMOVE_FROM_FAVORITE:
            console.log(payload);
            newFavorites = state.favorites.filter(l => l.city !== payload.city );
            localStorage.setItem('favorites',JSON.stringify(newFavorites));
            return{
                ...state, 
                favorites: newFavorites,  
            }
        default:
            return state    
    }

}
export const errorReducer = (state={error:false},action) => {
    const {type,payload} = action;
    switch (type) {
        case SET_ERROR_ALERT:
            return{
                error:true,
                message:payload
            }
        case REFRESH_ERROR_ALERT:
            return{
                error:false,
                message: ''
            }
        default:
            return state;
    }
}
