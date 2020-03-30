import React, { Component, useReducer } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap'
import Api from "../../Api"

class FavoritesPageIndex extends Component {
    state = {
        favedPlaces: []
    }

    componentDidMount = async () => {
        const user = await Api.fetch("/api/v1/places/users/me", "GET", '', 
        {"Authorization": "Bearer " + localStorage.getItem("userBase64")})
        this.setState({favedPlaces: user.favouritePlaces})
    }

    render() {
        return (
            <div>
                <h2>Saved</h2>
                <h4>Here you can find the favorites you starred</h4>

                {this.state.favedPlaces.length >= 1 && 
                    this.state.favedPlaces.map((favedPlaces, i) => 
                    <Card>
        <CardImg top width="100%" src={favedPlaces.Pictures[0]} alt="Card image cap" />
        <CardBody>
          <CardTitle key={i}>{favedPlaces.Name}</CardTitle>
          <CardText>place deets.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
        )}
                </div>
        );
    }
    
    
}

export default FavoritesPageIndex;