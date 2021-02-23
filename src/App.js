import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
// COMPONENTS
import Header from "./shared/Header";
import Home from './pages/Home.js';
import Favorites from "./pages/Favorites";

import {getLocationByGeoPosition,forecastsUrl} from './services/api';
import Loading from "./shared/Loading";

import './sass/main.scss';
import './App.css';
import clouds from "./asserts/images/clouds.png";
import night from "./asserts/images/night.jpg";

// actions


const App =()=> {
    const dispatch = useDispatch();
    const app = useSelector(state=>state.app);
    const {isDark,currentLocation,isCel} = app;

    
const getCurrentLocation = () => {
    dispatch(getLocationByGeoPosition(32.0853, 34.7818))
}

useEffect(() => {
    console.log(new Date().getHours());
    if(currentLocation === null){
        getCurrentLocation();
    }
}, [])
    const bgStyle = {
        backgroundImage:`url(${isDark ? night :clouds})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        height:'100vh'

    }

return (
    <Router>
        <Header />

            <main style={bgStyle}>
                <Switch>
                    <Route path="/" component={Home} exact />
                      <Route path="/favorites" component={Favorites} />
                      <Redirect to="/" />
                  </Switch>
              </main>
      </Router>


  );
}

export default App;
