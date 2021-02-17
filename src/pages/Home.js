import React from 'react';
import {useSelector} from 'react-redux';
import clouds from '../asserts/images/clouds.png';
import night from '../asserts/images/night.jpg';
import Search from "../components/Search";
import LocalLocation from "../components/LocalLocation";
import ForecastList from "../components/ForecastList";

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
    const {isDark} = useSelector(state=> state);


    return <div style={!isDark ? lightStyle : darkStyle}>
        <div className="home_search">
            <Search />
        </div>
        <div className="home_location">
            <LocalLocation location={DUMMY_OBJ}/>
        </div>
        <div className="home_forecast">
            <ForecastList />
        </div>
    </div>
}
export default Home;
