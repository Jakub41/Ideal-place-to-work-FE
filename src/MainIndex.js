import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LandingPage from "./Pages/landingPage/LandingIndex";
import Footer from "./Pages/landingPage/landingComponents/Footer";
import DetailsPageLanding from './Pages/detailsPage/DetailsPageIndex';
import Rating from "./Pages/rating& review/Rating";


class Main extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact path="/"><LandingPage/></Route>
                        <Route path="/details"><DetailsPageLanding/></Route>
                        <Route exact path="/review/rating"><Rating/></Route>
                    </Switch>
                    <Footer/>
                </Router>
            </>
        );
    }
}

export default Main;
