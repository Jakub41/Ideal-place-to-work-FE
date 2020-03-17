import React, { Component } from "react";
import {Container, Row, Col} from "reactstrap"

class LandingAPI extends Component {
    state = {
        places: []
    }
  render() {
      
    return (
      <Container>
        <Row>
          {this.state.places.map(place => (
            <Col lg-2 md-4 xs-12>
              <p>{place.name}</p> <img src={place.img} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  // componentDidMount = async () => {
  //   const plaaces = await fetch ("") 
  //   const placesJson = await places.json();
  //   this.setState( {places: placesJson.Search} )
  // }

}

export default LandingAPI;
