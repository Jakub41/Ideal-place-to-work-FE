import React, { Component } from "react";
import "./Landing.css";
import image from "../../images/shutterstock_610938071.jpg";
import { Row, Container } from "reactstrap";
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
          <Row>
   
              <img className="cover-image" src={image} alt="cover" fluid/>
              <h1>
                Your next
                <br /> perfect place <br />
                to work
              </h1>
          </Row>

          <LandingSearch />
          
          <LandingAPI />
          
        </Container>
      </>
    );
  }
}

export default LandingPage;
