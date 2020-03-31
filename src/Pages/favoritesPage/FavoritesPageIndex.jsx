import React, { Component, useReducer } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Col,
  Row,
  Container
} from "reactstrap";
import Api from "../../Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../favoritesPage/Favorites.css";

class FavoritesPageIndex extends Component {
  state = {
    favedPlaces: [],
    liked: true
  };

  componentDidMount = async () => {
    this.fetchFavPlaces();
  };

  fetchFavPlaces = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    const user = await Api.fetch("/users/me", "GET", "", {
      Authorization: "Bearer " + localStorage.getItem("token")
    });
    console.log(user);
    this.setState({ favedPlaces: user.favouritePlaces });
  };

  toggleLike = async id => {
    if (this.state.liked === true) {
      this.setState({
        liked: false
      });
    } else if (this.state.liked === false) {
      this.setState({
        liked: true
      });
    }
    await Api.fetch(`/places/handlefavourites/${id}`, "POST", "", {
      Authorization: "Bearer " + localStorage.getItem("token")
    });
    this.fetchFavPlaces();
  };

  render() {
    return (
      <div className="container">
        <h2>Saved</h2>
        <h4>Here you can find the favorites you starred</h4>
        <Row>
          {this.state.favedPlaces.length >= 1 &&
            this.state.favedPlaces.map((favedPlaces, i) => (
              <Col md="4">
                <Card className="divCard" style={{ marginBottom: "20px" }}>
                  <CardImg
                    id="cardImg"
                    src={favedPlaces.Pictures[0]}
                    alt="Card image cap"
                  />
                  <Container id="CardBod">
                  <CardBody className="card-body">
                    <CardTitle key={i}>{favedPlaces.Name}</CardTitle>
                    <CardText>
                      <div className="click-to-unlike">
                        <FontAwesomeIcon
                          id="like-disklike-btn"
                          icon={faHeart}
                          onClick={() => this.toggleLike(favedPlaces._id)}/>
                      </div>
                    </CardText>
                    <CardText>
                      {/* <small className="addedAt">{this.props.user.createdAt()}</small> */}
                    </CardText>
                  </CardBody>
                  </Container>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    );
  }

}

export default FavoritesPageIndex;
