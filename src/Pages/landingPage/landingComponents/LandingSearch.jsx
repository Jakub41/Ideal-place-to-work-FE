import React, { Component } from "react";
import { Input } from "reactstrap";
import closeIcon from "../../../icons/close.png";
import searchIcon from "../../../icons/Search.png";

class LandingSearch extends Component {
  state = {
    filteredPlaces: [],
    places: []
  };

  filterSearch = event => {
    let places = this.state.filteredPlaces;
    places = places.filter(place => {
      return (
        place.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ places: places });
  };

  componentWillMount = () => {
    this.setState({
      filteredPlaces: this.props.searchContent,
      places: this.props.searchContent
    });
  };

  render() {
    return (
      <div>
        <div className="searchRow">
          <div>
            <img src={searchIcon} className="searchIcon" alt="searchIcon" />
          </div>
          <div className={"search-input-text"}>
            <Input
              id="searchInput"
              type="text"
              placeholder="ex. wifi cafe near me"
              aria-label="Search"
              onChange={this.filterSearch}
            />
          </div>
          <div>
            <img src={closeIcon} id="closeIcon" alt="closeIcon" />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingSearch;
