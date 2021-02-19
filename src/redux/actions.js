import {IS_DARK_MODE,ADD_TO_FAVORITE,REMOVE_FROM_FAVORITE} from "./constants";

export const setDarknessState = () => dispatch => {
    dispatch({
        type:IS_DARK_MODE
    })
}
export const addToFavorite = (location) => dispatch => {
   
    dispatch({
        type:ADD_TO_FAVORITE,
        payload:location
    })
}
export const removeFavorite = (location) => dispatch => {
 
    dispatch({
        type:REMOVE_FROM_FAVORITE,
        payload:location
    })
}
