import React, { Component } from "react";
import "./Landing.css";
import image from "../../images/shutterstock_610938071.jpg";
import { Row, Container, Col } from "reactstrap";
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
        <Container fluid>
          <Row className="cover-header">
          <Col><h1>
                Your next
                <br /> perfect place <br />
                to work
              </h1>
              </Col>
              <img className="cover-image" src={image} alt="cover" fluid/>  
          </Row>
          </Container>

          <Container fluid>
          <LandingSearch />
          
          <LandingAPI />
          
        </Container>
      </>
    );
  }
}

export default LandingPage;
