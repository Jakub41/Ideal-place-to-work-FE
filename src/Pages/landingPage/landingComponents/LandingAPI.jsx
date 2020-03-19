import React, { Component } from "react";
import {Row, Col} from "reactstrap"
import mockData from '../../../Components/data/MOCK_DATA.json'


class LandingAPI extends Component {
    state = {
        // places: [],
        mockData: [],
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
      
    return (
      
        <Row fluid="md">
          <Col><h3>Near You</h3></Col><Col><h3 style={{color: "green"}} onClick={this.modalOpen}>Filter By</h3></Col> 
          {this.state.mockData.map(mockData => (
            <Col lg-2 md-4 xs-12>
              <p>{mockData.name}</p> <img src={mockData.img} alt="place"/>
            </Col>
          ))}
          <Col><h3>{mockData.rate}</h3></Col>
        </Row>
      
    );
  }

  // componentDidMount = async () => {
  //   const places = await fetch ("https://maps.googleapis.com/maps/api/place/textsearch/json?query=places+in+'Berlin'&key=AIzaSyDlkDftixlz_nvsxuPi0flAOP_0Cc6poBE](https://maps.googleapis.com/maps/api/place/textsearch/json?query=places+in+%27Berlin%27&key=AIzaSyDlkDftixlz_nvsxuPi0flAOP_0Cc6poBE") 
  //   const placesJson = await places.json();
  //   console.log(placesJson);
  //   this.setState( {places: placesJson.results} )
  // }

}

export default LandingAPI;
