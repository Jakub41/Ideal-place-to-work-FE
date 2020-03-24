import React, { Component } from "react";
import { Input } from "reactstrap";
// import closeIcon from "../../../icons/close.png";
import searchIcon from "../../../icons/Search.png";
import LandingSearchModal from "../landingComponents/LandingSearchModal"

class LandingSearch extends Component {
  state = {
    filteredPlaces: [],
    places: [],
    modalOpen: false
  };

  modalOpen = () => {
    if(this.state.modalOpen === true) {
      this.setState({modalOpen: false})
    } else if (this.state.modalOpen === false){
       this.setState({modalOpen: true})
    }
  }

  // filterSearch = event => {
  //   let places = this.state.filteredPlaces;
  //   places = places.filter(place => {
  //     return (
  //       place.toLowerCase().search(event.target.value.toLowerCase()) !== -1
  //     );
  //   });
  //   this.setState({ places: places });
  // };

  // componentWillMount = () => {
  //   this.setState({
  //     filteredPlaces: this.props.searchContent,
  //     places: this.props.searchContent
  //   });
  // };

  render() {
    return (
      <div>
        <div className="searchRow">
          <div>
            <img src={searchIcon} className="searchIcon" alt="searchIcon" onClick={this.modalOpen}/>
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
          {/* <div>
            <img src={closeIcon} id="closeIcon" alt="closeIcon" />
          </div> */}
        </div>
        {this.state.modalOpen && <LandingSearchModal modal={this.state.modalOpen} handleModal={this.modalOpen}/>}
      </div>
    );
  }
}

export default LandingSearch;
