import './App.css';
import React, { useState } from 'react';
import Navbar from "./Components/Navbar"
import LogIn from './Pages/logIn/LogIn';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import Match from './Pages/match/Match';
import FooterCompoment from './Components/FooterCompoment';
import Home from './Pages/home/Home';
import Setting from './Pages/setting/Setting';
import Statistic from './Pages/statistic/Statistic';
import Player from './Pages/player/Player';


function App() {


  return (
    <Router>
      <Navbar/>
      <Route exact path="/" >
            < LogIn />
      </Route>
      <div className="container">
        <Route path="/home" >
        <Home/>
        </Route>
        <Switch>
          <Route path="/match">
            <Match />
          </Route>
        </Switch>
        <Switch>
          <Route path="/setting">
            <Setting />
          </Route>
        </Switch>
        <Switch>
          <Route path="/statistic">
            <Statistic />
          </Route>
        </Switch>
        <Switch>
          <Route path="/player">
            <Player />
          </Route>
        </Switch>
      </div>
      <FooterCompoment/>
    </Router>
  );
}

export default App;
