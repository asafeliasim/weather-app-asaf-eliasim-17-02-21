import React,{useState,useEffect,useContext} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {addToFavorite,removeFavorite} from '../redux/actions';


const LocalLocation = () => {
    const dispatch = useDispatch();


    const app = useSelector(state=> state.app)
    const userPref = useSelector(state => state.userPref);
    const {isDark,currentLocation,weekForecast} = app;
    const {favorites} = userPref;
    const [exists,setExists] = useState(false) 
    useEffect(()=>{
        setExists(favorites.some(favorite=> favorite.city === currentLocation.city));
        console.log(exists);
    },[exists,currentLocation])

    const addLocationToFavorite = () => {
        setExists(true);
        let location = {
            key: currentLocation.key,
            city: currentLocation.city,
            country:currentLocation.country,
            temprature: weekForecast[0].Temperature.Maximum.Value,
            icon: weekForecast[0].Day.Icon,
            status: weekForecast[0].Day.IconPhrase
        }
        console.log("locatio: " , location);
        dispatch(addToFavorite(location));
    }
    const removeLocationFromFavorite = () => {
        setExists(false);
        let location = favorites.find(l => l.city === currentLocation.city);
        dispatch(removeFavorite(location));
    }

    return <div className={!isDark?"local":"local-light"}>

            <div className="local_country">
                {currentLocation.country}
            </div>
            <div className="local_city">
                {currentLocation.city}
            </div>
            <div className="local_hart"  onClick={exists? removeLocationFromFavorite:addLocationToFavorite}>
                <a href="#" className={exists ? "local_hart-red": "local_hart-dark" } style={{textDecoration: 'none', fontSize: '3rem'}} >
                    <i className="fas fa-heart"/>
                </a>
            </div>


        </div>
}
export default LocalLocation;
