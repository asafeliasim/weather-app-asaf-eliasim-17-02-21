import React, {useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import AuthComplete from "../components/AuthComplete";
import LocalLocation from "../components/LocalLocation";
import ForecastList from "../components/ForecastList";
import {getLocationByLocationKey,forecastsUrl} from '../services/api';
import ErrorAlert from "../shared/ErrorAlert";
import Loading from "../shared/Loading";
import axios from 'axios';
import env from "react-dotenv";
const Home = () => {

    const dispatch = useDispatch();
    const app = useSelector(state=> state.app);
    const errorAlert = useSelector(state=> state.errorAlert);
    const {error} = errorAlert;
    
    const {loading,currentLocation,isCel} = app;
    const [authCompleteString,setAuthCompleteString] = useState('');
    const [cities,setCities] = useState([]);
    const [query,setQuery] = useState('');
   
    
    useEffect(()=>{ 
        if(!loading){
           
            getCurrentForecast();
        }
    },[currentLocation])

    const getCurrentForecast = () => {
        dispatch(forecastsUrl(currentLocation.key,isCel))
    };

    const handleAuthComplete = (string) => {
        setAuthCompleteString(string);
        if(string){
            axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${env.API_KEY}&q=${query}`)
                .then(res=>{
                    setCities(res.data.map(city => city.LocalizedName));
                    console.log("cities: " + cities);
                }).catch(err=>{
                console.log(err)
            })
        }     
    }
    const handleQueryComplete = (city) => {
        dispatch(getLocationByLocationKey(city));
        setQuery('');
    }


    if(loading){
        return <Loading/>
    }

    return <div>
                <AuthComplete
                    onChange={handleAuthComplete}
                    value={authCompleteString}
                    cities={cities}
                    setQuery={setQuery}
                    handleQueryComplete={handleQueryComplete}
                />

                <ErrorAlert openAlert={error}/>
                <LocalLocation location={currentLocation} />
                <ForecastList />
            </div>
}
export default Home;
