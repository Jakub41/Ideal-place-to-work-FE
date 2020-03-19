
import React, { Component } from 'react';
import { Input, Row, Col } from 'reactstrap'
import closeIcon from "../../../icons/close.png";
import searchIcon from "../../../icons/Search.png"

class LandingSearch extends Component {
    state = {
        filteredPlaces: [],
        places: []
    }

    filterSearch = (event) => {
        let places = this.state.filteredPlaces;
        places = places.filter((place) => {
            return place.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({places: places});
    }

    componentWillMount = () => {
        this.setState({
            filteredPlaces: this.props.searchContent,
            places: this.props.searchContent
        })
    }

    render() {
        return (
            <Row flex>    
                <Col><img src={searchIcon} id="searchIcon" alt="searchIcon"/></Col>
                    <Col>
                    <Input id="searchInput"
                    type="search" 
                    placeholder="ex. wifi cafe near me" 
                    aria-label="Search"
                    onChange={this.filterSearch} />
                    </Col>
                <Col><img src={closeIcon} id="closeIcon" alt="closeIcon"/></Col>
            </Row>   
        );
    }
}

export default LandingSearch;