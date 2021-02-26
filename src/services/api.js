import {SET_LOCATION_BY_GEO,SET_LOCATION_FORECAST,SET_ERROR_ALERT} from "../redux/constants";
import axios from "axios";
import env from "react-dotenv";
export const acuUrl = 'https://dataservice.accuweather.com'


export const getLocationByGeoPosition = (lat, long) => dispatch => {
    console.log("key: " , process.env.API_KEY)
     axios.get(`${acuUrl}/locations/v1/cities/geoposition/search?apikey=${env.API_KEY}&q=${lat},${long}`)

         .then(res => {
             const locationResult = {
                 key: res.data.Key,
                 country: res.data.Country.LocalizedName,
                 city:res.data.ParentCity.LocalizedName,
             }
             console.log(locationResult)
             dispatch({
                 type:SET_LOCATION_BY_GEO,
                 payload:locationResult
             })
         })
         .catch(err=>{
             dispatch({
                 type:SET_ERROR_ALERT,
                 payload:{
                     errorText:err.message,
                     severity:"warning"
                 }
             })
        })
}
export const getLocationByLocationKey = (locationKey) => dispatch => {
    
    axios.get(`${acuUrl}/locations/v1/search?q=${locationKey}&apikey=${env.API_KEY}`)
        .then((res)=> {
            console.log(res.data)
            const locationResult = {
                key: res.data[0].Key,
                country: res.data[0].Country.LocalizedName,
                city:res.data[0].LocalizedName,
            }
            console.log(locationResult)
            dispatch({
                type:SET_LOCATION_BY_GEO,
                payload:locationResult
            })
        }).catch(err=>{
        dispatch({
            type:SET_ERROR_ALERT,
            payload:{
                errorText:err.message,
                severity:"warning"
            }
        })
    })
}
export const forecastsUrl = (locationKey,isCel) => dispatch => {
   
    axios.get(`${acuUrl}/forecasts/v1/daily/5day/${locationKey}?apikey=${env.API_KEY}${isCel ? '&metric=true' : ''}`)
        .then(res=>{

            const {data} = res;
            console.log(data.DailyForecasts)
            const fiveDays = data.DailyForecasts
            dispatch({
                type:SET_LOCATION_FORECAST,
                payload:fiveDays.map(day => day)
            })

        }).catch(err=>{
        dispatch({
            type:SET_ERROR_ALERT,
            payload:{
                errorText:err.message,
                severity:"warning"
            }
        })
    })
}

export const getIconFromApi = (icon ) => {

        if (icon < 10) {
            icon = '0' + icon

        }
        return `https://developer.accuweather.com/sites/default/files/${icon}-s.png`
}
