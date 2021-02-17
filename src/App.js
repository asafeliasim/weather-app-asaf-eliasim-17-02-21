import React from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
// COMPONENTS
import Header from "./shared/Header";
import Home from './pages/Home.js';
import Favorites from "./pages/Favorites";





import './sass/main.scss';

import './App.css';

const App =()=> {
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
