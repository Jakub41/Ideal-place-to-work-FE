import React, { useState } from "react";
import { Input } from "reactstrap";
// import closeIcon from "../../../icons/close.png";
import searchIcon from "../../../icons/Search.png";
import mapIcon from "../../../icons/Pin02.png";
import closeIcon from "../../../icons/close.png";
import { useEffect } from "react";


const LandingSearch = (props) => {
  const [searchPlace, setSearchPlace] = useState("")
  const [recentSearches, setRecentSearches] = useState([])
  // localStorage.getItem("places".split + ",")
  const [searchOpen, setSearchOpen] = useState(false)

  const openSearch = (e) => {
    setSearchOpen(true)
    console.log(e.target.value)
  };

  useEffect(() => {
    if(localStorage.getItem('places')) {
      const places = localStorage.getItem('places');
      const placesArr = places.split(',')
      setRecentSearches(placesArr)
    }
  }, [])

  const handleSearch = (e) => {
    if((e.key === 'Enter')) {
      props.toggleLoading()
      const places = [];
      if(localStorage.getItem('places')) {
        const placesFromLocalStorage = localStorage.getItem('places');
        const arrayFromLS = placesFromLocalStorage.split(',')
        places.push(searchPlace)
        for(var i = 0; i < arrayFromLS.length - 1; i++) {
          places.push(arrayFromLS[i])
        }
      } else {
        places.push(searchPlace)
      }
      localStorage.setItem('places', places);
      setTimeout(() => {
        props.fetchResults(searchPlace)
        setSearchOpen(false)
        props.toggleLoading()
      }, 500)
    }
  }

  // filterSearch = (event) => {
  //   let searchPlace = this.state.filteredPlaces;
  //   searchPlace = searchPlace.filter(place => {
  //     return (
  //       searchPlace.toLowerCase().search(event.target.value.toLowerCase()) !== -1
  //     );
  //   });
  //   setSearchPlace({ filteredPlaces });
  // };

  // componentWillMount = () => {
  //   this.setState({
  //     filteredPlaces: this.props.searchContent,
  //     places: this.props.searchContent
  //   });
  // };

  // clearSearchItems = () => {

  // }

    return (
      <div className="search-container">
        <div className={searchOpen ? "searchRow-toggled" : "searchRow"}>
          <div>
            <img src={searchIcon} className={searchOpen ? "searchIcon-toggled" : "searchIcon"} alt="searchIcon" />
          </div>
          <div className="search-input-text">
            <Input
              id={searchOpen ? 'searchInput-toggled' : "searchInput"}
              type="text"
              placeholder="example: wifi cafe near me"
              value={searchPlace}
              onClick={(e) => openSearch(e)}
              onKeyPress={handleSearch}
              onChange={(e) => setSearchPlace(e.target.value)} />
          </div>
          <div>
            <img src={closeIcon} onClick={() => setSearchOpen(false)}className={searchOpen ? "close-icon" : "results-map"} alt="searchIcon" />
          </div>
          <div className={searchOpen ? "results-map-toggled" : "results-map"}>
            <div className='map-div-search'>
              <img src={mapIcon} className="map-icon" alt="searchIcon" />
              <h3>Show map</h3>
            </div>
          </div>
          {searchOpen && <div className='recent-searches-div'>
            <h2>Recent Searches</h2>
            {recentSearches ? recentSearches.map((search, i) => 
              <h2 style={{paddingLeft: '10px', fontFamily: 'Roboto', fontWeight: '400'}} key={i}>{search}</h2>
            ) : <h2 style={{paddingLeft: '10px', fontFamily: 'Roboto', fontWeight: '400'}}>No recent searches</h2>}
          </div>}
        </div>
      </div>
  );
}

export default LandingSearch;
