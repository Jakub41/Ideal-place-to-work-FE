import React, {Component} from 'react';
import LandingPage from "../Pages/landingPage/LandingIndex";
import Footer from "../Pages/landingPage/landingComponents/Footer";

class Main extends Component {
    render() {
        return (
            <div>
                <LandingPage/>
                
                <Footer/>
            </div>
        );
    }
}

export default Main;