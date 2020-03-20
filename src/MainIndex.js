import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./Pages/landingPage/LandingIndex";
import Footer from "./Pages/landingPage/landingComponents/Footer";


class Main extends Component {
    render() {
        return (
            <>
            <Router >
                <Switch>
                <Route exact path="/"><LandingPage/></Route>
                </Switch>
                <Footer/>
            </Router>    
            </>
        );
    }
}

export default Main;