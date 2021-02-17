import {
    IS_DARK_MODE,
    SET_LOCATION_BY_GEO,
    SET_LOCATION_FORECAST
} from "./constants";


const initialState = {
    isDark:false,
    isCel:false,
    favorites:[],
    currentLocation:null,
    weekForecast:[],
    loading:true,
    foreCastLoading:true,
}

export const appReducer = (
    state=initialState,
    action)=>{

    const {type,payload} = action;
    switch (type) {
        case IS_DARK_MODE:
            return{
                ...state,
                isDark: !state.isDark
            }
        case SET_LOCATION_BY_GEO:
            return{
                ...state,
                currentLocation: {
                    key: payload.key,
                    country:payload.country,
                    city:payload.city
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


