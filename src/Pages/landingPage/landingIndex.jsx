import React, { Component } from "react";
import style from "../landingPage/landing.css"
import Background from "../../images/Betahaus-Cafe-Berlin.jpg";
import { Col, Row, Container } from "reactstrap";
import landingSearch from './landingComponents/landingSearch'
import landingAPI from "./landingComponents/landingAPI"
import landingStickyBottom from './landingComponents/landingStickyBottom'

class LandingPage extends Component {
  render() {
    return (<>
      <Container fluid style={{ height: "100vh" }}>
        <Row className={"image"}>
          <Col xs="12">
            <img src={Background} alt={"cafebackground"} />
            <h1>
              Your next <br /> perfect perfect <br /> place to work
            </h1>
          </Col>
        </Row>
      </Container>


           
      <landingAPI />
        
    </>);
  }
}

export default LandingPage;
