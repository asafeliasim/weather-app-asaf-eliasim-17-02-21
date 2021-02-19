import React, {useEffect, useCallback,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import AuthComplete from "../components/AuthComplete";
import LocalLocation from "../components/LocalLocation";
import ForecastList from "../components/ForecastList";
import {getLocationByLocationKey,forecastsUrl} from '../services/api';


import axios from 'axios';
const Home = () => {

    const dispatch = useDispatch();
    const app = useSelector(state=> state.app);
  
    
    const {loading,currentLocation,isCel} = app;
    const [cel,setCel] = useState(isCel)
    const [authCompleteString,setAuthCompleteString] = useState('');
    const [cities,setCities] = useState([]);
    const [query,setQuery] = useState('');
   
    
    useEffect(()=>{ 
        if(!loading){
           
            getForcast();
        }
    },[currentLocation])

    const getForcast = () => {
        dispatch(forecastsUrl(currentLocation.key,isCel))
    };

    const handleAuthComplete = (string) => {
        setAuthCompleteString(string);
        console.log("authCompleteString: " + authCompleteString);
        console.log("query " + query);
        if(string){
            axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=sTea70BgiP5F4nFE50N1fCDG3WGt8Xcb&q=${query}`)
                .then(res=>{
                    setCities(res.data.map(city => city.LocalizedName));
                    console.log("cities: " + cities);
                }).catch(err=>{
                console.log(err)
            })
        
        }     
    }
    const handleQueryComplete = (city) => {
        console.log(city);
        dispatch(getLocationByLocationKey(city));
        setQuery('');
    }


    if(loading){
        return <h2>Loading</h2>
    }

    return <div >
                <AuthComplete
                    onChange={handleAuthComplete}
                    value={authCompleteString}
                    cities={cities}
                    setQuery={setQuery}
                    handleQueryComplete={handleQueryComplete}
                />
                <LocalLocation location={currentLocation} />
                <ForecastList />
            </div>
}
export default Home;
