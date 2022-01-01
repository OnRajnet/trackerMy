import './App.css';
import React from 'react';
import Navbar from "./Components/Navbar"
import LogIn from './Components/SingIn'
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
import Register from "./Components/SingUp"
import ProtectedRoute from './Components/ProtectedRoute';
import RouterPath from './Router/index';
import { AuthContextProvider } from './Context/AuthContext';
import { SnackbarContextProvider } from './Context/SnackbarContext';
import createMatch from "./Pages/createMatch/CreateMatch";
import matchDetail from "./Pages/matchDetail/MatchDetail";

function App() {


    return (
        <AuthContextProvider>
            <SnackbarContextProvider>
                <Router>
                    <Navbar/>
                    <div className="container">
                        <Switch>
                            <Route exact path={RouterPath.index}>
                                < LogIn/>
                            </Route>

                            <Route path={RouterPath.register}>
                                <Register/>
                            </Route>
                            <ProtectedRoute exact path={RouterPath.home} component={Home}/>
                            <ProtectedRoute exact path={RouterPath.match} component={Match}/>
                            <ProtectedRoute exact path={RouterPath.setting} component={Setting}/>
                            <ProtectedRoute exact path={RouterPath.statistic} component={Statistic}/>
                            <ProtectedRoute exact path={RouterPath.createMatch} component={createMatch}/>
                            <ProtectedRoute excat path={RouterPath.matchDetail} component={matchDetail}/>

                        </Switch>
                    </div>
                    <FooterCompoment/>
                </Router>
            </SnackbarContextProvider>
        </AuthContextProvider>
    );
}

export default App;
