import React, {Component} from "react";
import "./Landing.css"
import Background from "../../images/shutterstock_610938071.jpg";
import {Col, Row, Container} from "reactstrap";
import LandingSearch from './landingComponents/LandingSearch'
import StickyButtons from "./landingComponents/StickyButtons";


class LandingPage extends Component {
    render() {
        return (<>
            <Container className='cover-image' fluid style={{height: "100vh"}}>
                <Row className={"image"}>


                    <h1>
                        Your next <br/> perfect place <br/> to work
                    </h1>
                    {/*<LandingSearch />*/}
                </Row>


            </Container>

            <StickyButtons/>
            {/*<landingAPI />*/}


        </>);
  }
}

export default LandingPage;
