import React,{useEffect,useCallback} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import ForecastItem from "./ForecastItem";
import {forecastsUrl} from "../services/api";
import Loading from "../shared/Loading";
const ForecastList = () => {
    const dispatch = useDispatch();
    const app= useSelector(state=>state.app);

    const {currentLocation,foreCastLoading,weekForecast} = app;

    const getCurrentForecastLocation = useCallback(() => {
        if(currentLocation!==null){
            dispatch(forecastsUrl(currentLocation.key))
        }

    },[currentLocation])
    useEffect(()=>{
        getCurrentForecastLocation();

    },[weekForecast])

    if(foreCastLoading){
        return <Loading />
    }

    return <div className="forecast_list">

        {weekForecast && weekForecast.length > 0 && weekForecast.map((day)=>
            <ForecastItem item={day} key={day.id} />
        )}

    </div>
}
export default ForecastList;
