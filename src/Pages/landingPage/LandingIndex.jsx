import React, {Component} from "react";
import "./Landing.css";
import image from "../../images/shutterstock_610938071.jpg";
import {Row, Container, Col} from "reactstrap";
import LandingSearch from "./landingComponents/LandingSearch";
import LandingAPI from "./landingComponents/LandingAPI";


class LandingPage extends Component {
    state = {
        GoodService: false,
        GoodWorkingPlace: false,
        GoodWifi: false
    }

    render() {
        return (
            <>
                <div className={'flex-box'}>
                    <div className="flex-row cover-image-bg">
                        <h1 className={'landing-page-title'}>
                            Your next
                            <br/> perfect place <br/>
                            to work
                        </h1>
                    </div>
                </div>

                <Container fluid>
                    <LandingSearch/>

                    <LandingAPI/>

                </Container>
            </>
        );
    }
}

export default LandingPage;
