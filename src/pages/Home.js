import React, {useEffect, useCallback,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import clouds from '../asserts/images/clouds.png';
import night from '../asserts/images/night.jpg';
import Search from "../components/Search";
import LocalLocation from "../components/LocalLocation";
import ForecastList from "../components/ForecastList";
import {autoCompleteUrl,currentWeatherFiveDays,getLocationByGeoPosition,forecastsUrl} from '../services/api';


const lightStyle = {
    backgroundImage:`url(${clouds})`,
    backgroundPosition:'center',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',

}
const darkStyle = {
    backgroundImage:`url(${night})`,
    backgroundPosition:'center',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
}
const DUMMY_OBJ = {
    country:'Israel',
    city:'Tel Aviv',
    degree: '51'
}
const Home = () => {
    const dispatch = useDispatch();
    const state = useSelector(state=> state);
    const [currentCityWeather, setCurrentCityWeather] = useState(null);
    const {loading,currentLocation,isDark} = state;

 /*   const getLocationForecast = useCallback(()=>{
        if(currentCityWeather !== null){
            const locationKey = currentCityWeather.key;
            console.log(locationKey)
            dispatch(forecastsUrl(locationKey))
        }
    },[])*/


    const getCurrentLocation = () => {
        dispatch(getLocationByGeoPosition(32.0853, 34.7818))
    }

    useEffect(()=>{
        if(currentCityWeather === null){
            getCurrentLocation();
            setCurrentCityWeather(currentLocation);
        }
    },[])


 /*   useEffect(()=>{
        if(currentCityWeather !== null){
            getLocationForecast()
        }
    },[getLocationForecast])*/

    if(loading){
        return <h2>Loading</h2>
    }

    return <div style={!isDark ? lightStyle : darkStyle}>
            <div className="home_search">
                <Search />
            </div>
            <div className="home_location">
                <LocalLocation location={currentLocation}/>
            </div>
            <div className="home_forecast">
                <ForecastList />
            </div>
        </div>
}
export default Home;
