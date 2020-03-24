import React, { Component } from "react";
import {Row, Col, Container} from "reactstrap"
import { Link } from 'react-router-dom'
import mockData from '../../../Components/data/MOCK_DATA.json'
import LandingFilterModal from '../landingComponents/LandingFilterModal'
import '../Landing.css'


class LandingAPI extends Component {
    state = {
        // places: [],
        modalOpen: false
    }

   modalOpen = () => {
     if(this.state.modalOpen === true) {
       this.setState({modalOpen: false})
     } else if (this.state.modalOpen === false){
        this.setState({modalOpen: true})
     }
   }


  render() {
      console.log(this.state.modalOpen)
    return (<>
      <Container flex>
        <Row flex="md-4">
          <Col className="landingAPIHeaders"><h3>Near You</h3></Col><Col><h3 id="filterBy" onClick={this.modalOpen}>Filter By</h3></Col>
          </Row>

          <Row>
          {mockData.map((mockData, index) => (
            <Col key={index} flex="lg-3 md-4 xs-12">
              <h4 className="placeNames">{mockData.name}</h4>
              <Link to="/details"><img className="placeImgs" src={mockData.img}/></Link>

            </Col>
          ))}
           <Col><h3>{mockData.rate}</h3></Col>
         {this.state.modalOpen && <LandingFilterModal modal={this.state.modalOpen} handleModal={this.modalOpen}/>}
        </Row>
      </Container>
    </>);
  }

  // componentDidMount = async () => {
  //   const places = await fetch ("https://maps.googleapis.com/maps/api/place/textsearch/json?query=places+in+'Berlin'&key=AIzaSyDlkDftixlz_nvsxuPi0flAOP_0Cc6poBE](https://maps.googleapis.com/maps/api/place/textsearch/json?query=places+in+%27Berlin%27&key=AIzaSyDlkDftixlz_nvsxuPi0flAOP_0Cc6poBE")
  //   const placesJson = await places.json();
  //   console.log(placesJson);
  //   this.setState( {places: placesJson.results} )
  // }

}

export default LandingAPI;
