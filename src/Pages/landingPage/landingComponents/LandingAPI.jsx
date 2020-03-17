import React, { Component } from "react";
import {Container, Row, Col} from "reactstrap"

class LandingAPI extends Component {
    state = {
        cafes: []
    }
  render() {
      
    return (
      <Container>
        <Row>
          {this.state.cafes.map(cafe => (
            <Col lg-2 md-4 xs-12>
              <p>{cafe.name}</p> <img src={cafe.img} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  // componentDidMount = async () => {
  //   const cafes = await fetch ("") 
  //   const cafesJson = await cafes.json();
  //   this.setState( {cafes: cafesJson.Search} )
  // }

}

export default LandingAPI;
