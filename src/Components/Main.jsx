import React, {Component} from 'react';
import LandingPage from "../Pages/landingPage/LandingIndex";
import LandingStickyBottom from "../Pages/landingPage/landingComponents/LandingStickyBottom";
import Footer from "../Pages/landingPage/landingComponents/Footer";

class Main extends Component {
    render() {
        return (
            <div>
                <LandingPage/>
                {/*<LandingStickyBottom />*/}
                <Footer/>
            </div>
        );
    }
}

export default Main;