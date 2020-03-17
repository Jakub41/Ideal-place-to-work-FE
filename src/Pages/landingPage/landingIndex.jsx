import React, { Component } from "react";
import "./landing.css";
import Background from "../../images/shutterstock_610938071.jpg";
import { Col, Row, Container } from "reactstrap";
import landingSearch from './landingComponents/landingSearch'
import LandingAPI from "./landingComponents/LandingAPI"
import LandingStickyBottom from './landingComponents/LandingStickyBottom'

class LandingPage extends Component {
  render() {
    return (<>
      <div style={{ height: "100vh" }}>
        <Row className={"image"}>
          <Col xs="12">
            <img src={Background} alt={"cafebackground"} />
            <h1>
              Your next <br /> perfect perfect <br /> place to work
            </h1>
          </Col>

        </Row>
      </div>


           
      {/*<LandingAPI />*/}
      <LandingStickyBottom/>
    </>);
  }
}

export default LandingPage;
