
import {SET_LOCATION_BY_GEO,SET_LOCATION_FORECAST} from "../redux/constants";
import axios from "axios";
const apiKey =  'itP0PkNaAxpYPrlcVvCDVnuWnsRAAJ4K';

export const autoCompleteUrl = (locationQuery) => {
    return `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${locationQuery}`
}
export const currentConditionsUrl = locationKey => {
    return `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`
}
export const currentWeatherFiveDays = locationKey => {
    return `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}/?apikey=${apiKey}`
}
export const getLocationByGeoPosition = (lat, long) => dispatch => {

     axios.get(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${lat},${long}`)

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
         console.log(err)
     })

}
export const forecastsUrl = (locationKey) => dispatch => {
    console.log(locationKey)
    axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`)
        .then(res=>{

            const {data} = res;

            const fiveDays = data.DailyForecasts
            dispatch({
                type:SET_LOCATION_FORECAST,
                payload:fiveDays.map(day => day)
            })

        }).catch(err=>{
        console.log(err)
    })
}

export const getIconFromApi = (icon) => {
        if (icon < 10) {
            icon = '0' + icon
        }
        return `https://developer.accuweather.com/sites/default/files/${icon}-s.png`
}
