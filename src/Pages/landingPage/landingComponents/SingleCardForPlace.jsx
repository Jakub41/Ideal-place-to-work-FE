import React, { Component } from "react";
import { Row, Col, Container, CardImg, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import Star from "../../../icons/Star.png";

const SingleCardForPlace = props => {
  return (
    <Col xs="12" md="6" lg="4" className="places-Col">
      <Link to={"/details/" + props.place._id}>
        <CardImg className="placeImgs" src={props.place.Pictures[0]} alt="places" />
      </Link>
      <CardBody className="card-taxt-container">
        <CardTitle className="places-description-landing">
          <Row>
            <Col xs="9">{props.place.Name}</Col>
            <Col xs="3">
              {props.place.RateAverage}{" "}
              <img
                className="rating-star-icon-landing-page"
                src={Star}
                alt="rating"
              />
            </Col>
          </Row>
        </CardTitle>
      </CardBody>
    </Col>
  );
};
export default SingleCardForPlace;
