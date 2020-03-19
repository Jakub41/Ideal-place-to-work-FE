import React, {Component} from 'react';
import LandingPage from "../Pages/landingPage/LandingIndex";
import Footer from "../Pages/landingPage/landingComponents/Footer";
import DetailsPageIndex from "../Pages/detailsPage/DetailsPageIndex"
import landingFilterModal from '../Pages/landingPage/landingComponents/LandingFilterModal';


class Main extends Component {
    render() {
        return (
            <>
                <div>
                <LandingPage/>
                </div>
                {/* <DetailsPageIndex/> */}
                <div>
                <Footer/>
                </div>
            </>
        );
    }
}

export default Main;