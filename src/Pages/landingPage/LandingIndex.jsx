import React, {Component} from "react";
import "./Landing.css"
import Background from "../../images/Betahaus-Cafe-Berlin.jpg";
import {Col, Row, Container} from "reactstrap";
import LandingSearch from './landingComponents/LandingSearch'
import LandingAPI from "./LandingComponents/LandingAPI"
import LandingStickyBottom from './LandingComponents/LandingStickyBottom'

class LandingPage extends Component {
    render() {
        return (<>
            <Container fluid style={{height: "100vh"}}>
                <Row className={"image"}>

                    <img src={Background} alt="cafebackground"/>
            
            <h1>
              Your next <br /> perfect place <br /> to work
            </h1>
            <LandingSearch />
        </Row>

       

      </Container>


           
      <landingAPI />
        
    </>);
  }
}

export default LandingPage;
