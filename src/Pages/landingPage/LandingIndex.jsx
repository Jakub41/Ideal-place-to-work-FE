import React, {Component} from "react";
import "./Landing.css"
import Background from "../../images/shutterstock_610938071.jpg";
import {Col, Row, Container} from "reactstrap";
import LandingSearch from './landingComponents/LandingSearch'
import LandingAPI from './landingComponents/LandingAPI'


class LandingPage extends Component {
    render() {
        return (<>
            <Container fluid>  
                <Row className='cover-image' src={'image'} fluid style={{height: "100vh"}}>
                    <Col>
                    <h1>
                        Your next 
                        <br/> perfect place <br/> 
                        to work
                    </h1>
                    </Col>
                </Row>

                <LandingSearch />

                <LandingAPI />
            
            </Container> 
        </>);
  }
}

export default LandingPage;
