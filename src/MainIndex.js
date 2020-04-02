import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LandingPage from "./Pages/landingPage/LandingIndex";
import Api from './Api'
import Footer from "./Pages/landingPage/landingComponents/Footer";
import DetailsPageLanding from './Pages/detailsPage/DetailsPageIndex';
import FavoritesPageIndex from './Pages/favoritesPage/FavoritesPageIndex'



class Main extends Component {
    componentDidMount = async() => {
        const resp = await Api.fetch('/auth/refresh', "POST", "", {"Authorization": "Bearer " + localStorage.getItem('token')})
        console.log(resp)
        localStorage.setItem('token', resp.accessToken)
    }
    render() {
        return (
            <>
            <Router >
                <Switch>
                <Route exact path="/"><LandingPage/></Route>
                <Route path="/details/:id"><DetailsPageLanding /></Route>
                <Route path="/favs"><FavoritesPageIndex/></Route>
                </Switch>
                <Footer/>
            </Router>
            </>
        );
    }
}

export default Main;
