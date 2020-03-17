import React, { Component } from "./node_modules/react";
import "./landing.css"
import Background from "../../images/Betahaus-Cafe-Berlin.jpg";
import { Col, Row, Container } from "./node_modules/reactstrap";
import LandingSearch from './LandingComponents/LandingSearch'
import LandingAPI from "./LandingComponents/LandingAPI"
import LandingStickyBottom from './LandingComponents/LandingStickyBottom'

class LandingPage extends Component {
  render() {
    return (<>
      <Container fluid style={{ height: "100vh" }}>
        <Row className={"image"}>
          <Col xs="12">
            <img src={Background} alt={"cafebackground"} />
            <h1>
              Your next <br /> perfect place <br /> to work
            </h1>
          </Col>
        </Row>
      </Container>


           
      <landingAPI />
        
    </>);
  }
}

export default LandingPage;
