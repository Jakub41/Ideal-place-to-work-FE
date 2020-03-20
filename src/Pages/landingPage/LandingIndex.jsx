import React, { Component } from "react";
import "./Landing.css";
import image from "../../images/shutterstock_610938071.jpg";
import { Col, Row, Container } from "reactstrap";
import LandingSearch from "./landingComponents/LandingSearch";
import LandingAPI from "./landingComponents/LandingAPI";


class LandingPage extends Component {
  render() {
    return (
      <>
        <div fluid>
          <div>
            <div>
              <img className="cover-image" src={image} alt="cover-image" fluid style={{height: "150vh"}}/>
              <h1>
                Your next
                <br /> perfect place <br />
                to work
              </h1>
            </div>
          </div>
          <LandingSearch />
          <LandingAPI />
        </div>
      </>
    );
  }
}

export default LandingPage;
