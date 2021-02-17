import React from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
// COMPONENTS
import Header from "./shared/Header";
import Home from './pages/Home.js';
import Favorites from "./pages/Favorites";
import {autoCompleteUrl,currentWeatherFiveDays,getLocationByGeoPosition,forecastsUrl} from './services/api';





import './sass/main.scss';

import './App.css';

const App =()=> {
/*    const data = autoCompleteUrl("Israel");

 const location = getLocationByGeoPosition(32.0853, 34.7818);
    const forecast = forecastsUrl("215793");
    console.log(forecast)
    console.log(location)*/
  return (

      <Router>
          <Header />
         <Switch>
             <Route path="/" component={Home} exact />
             <Route path="/favorites" component={Favorites} />
             <Redirect to="/" />
         </Switch>
      </Router>


  );
}

export default App;
