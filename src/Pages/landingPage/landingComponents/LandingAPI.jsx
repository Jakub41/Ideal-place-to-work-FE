import React, { Component } from "react";
import { Row, Col, Container, CardImg, CardBody, CardTitle } from "reactstrap";
import SingleCardForPlace from './SingleCardForPlace';
import Loader from 'react-loader-spinner';
import { Link } from "react-router-dom";
import Star from "../../../icons/Star.png";
import ReactPaginate from 'react-paginate';
import cupIcon from "../../../icons/bars01.png";
import workIcon from "../../../icons/cowos01.png";
import wifiIcon from "../../../icons/wifi01.png";
import cupIcon2 from "../../../icons/bars02.png";
import workIcon2 from "../../../icons/cowos02.png";
import wifiIcon2 from "../../../icons/wifi02.png";
import "../Landing.css";

class LandingAPI extends Component {
  state = {
    filterBox: false
  };

  filterBlockOpen = () => {
    this.setState({
      filterBox: !this.state.filterBox
    });
    console.log(this.state.filterBox);
  };
  

  render() {
    return (
      <>
        <Container fluid style={{ padding: "0px 40px" }}>
          <Row className='near-your-filter-div'>
            <Col xs="6">
              <h3 className="near-you-filter-landing-page">Near You</h3>
            </Col>
            <Col xs="6">
              <div
                className={
                  this.state.filterBox
                    ? "div-with-filtering-options-toggled"
                    : "div-with-filtering-options"
                }
              >
                <h3
                  className="near-you-filter-landing-page"
                  id="filterBy"
                  onClick={this.filterBlockOpen}
                >
                  Filter By
                </h3>
                <Row>
                  <Col className="col-4">
                    <img
                      className="filterIcons"
                      src={this.props.goodService ? cupIcon2 : cupIcon}
                      id="goodService"
                      onClick={(e) => this.props.togleFilter(e.target.id)}
                      alt="service-icon"
                    />
                    <div className='description-for-filters'>
                      <h4>Goog Service</h4>
                    </div>
                  </Col>
                  <Col className="col-4">
                    <img
                      className="filterIcons"
                      src={this.props.goodWorkingPlace ? workIcon2 : workIcon}
                      id="goodWorkingPlace"
                      onClick={(e) => this.props.togleFilter(e.target.id)}
                      alt="working-icon"
                    />
                    <div className='description-for-filters'>
                      <h4>Comfortable Place</h4>
                    </div>
                  </Col>

                  <Col className="col-4">
                    <img
                      className="filterIcons"
                      src={this.props.goodWifi ? wifiIcon2 : wifiIcon}
                      id="goodWifi"
                      onClick={(e) => this.props.togleFilter(e.target.id)}
                      alt="wifi-icon"
                    />
                    <div className='description-for-filters'>
                      <h4>Goog <br/> WiFi</h4>
                    </div>
                  </Col>
                </Row>
                <hr/>
                <div className='filter-descrp-bottom'>
                  <h3>Choose by filters. <strong>Unselect them for ALL results.</strong></h3>
                </div>
              </div>
            </Col>
          </Row>
          {this.props.loading && <div><Loader
                type="Oval"
                color="#9200E6"
                height={70}
                width={70}
                style={{padding: '100px 44%'}}
             /></div>}
          <Row>
            {this.props.places.places &&
              this.props.places.places.map((place, index) => (
                <SingleCardForPlace place={place} key={index} />
              ))}
          </Row>
          <div>
                <ReactPaginate
                  previousLabel={'previous'}
                  nextLabel={'next'}
                  breakLabel={'...'}
                  breakClassName={'break-me'}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={'pagination'}
                  subContainerClassName={'pages pagination'}
                  activeClassName={'active'}
                />
            </div>
        </Container>
      </>
    );
  }
}
export default LandingAPI;
