import React, {Component} from "react";
import "./Landing.css";
import Api from '../../Api';
import Geocode from "react-geocode";
import { geolocated } from "react-geolocated";
import {Container} from "reactstrap";
import LandingSearch from "./landingComponents/LandingSearch";
import LandingAPI from "./landingComponents/LandingAPI";


class LandingPage extends Component {
    state = {
        placeToSearch: '',
        toFilter: '',
        pageCount: null,
        limit: 6,
        skip: 0,
        GoodService: false,
        QuitePlace: false,
        WifiRate: false,
        places: [],
        loading: false,
        nothingFound: false,
        location: {
            latitude: undefined,
            longitude: undefined,
            city: ""
        }
    }

    handlePageClick = data => {
        this.setState({
            loading: true,
            places: []
        })
        let selected = data.selected;
        let offset = Math.ceil(selected * this.state.limit);

        setTimeout(() => {
            this.setState({ skip: offset }, async() => {
                if(this.state.GoodService === true || this.state.QuitePlace === true || this.state.WifiRate === true) {
                    await this.filterResults(this.state.toFilter)
                } else if(this.state.placeToSearch) {
                    await this.fetchResults(this.state.placeToSearch)
                } else {
                    const resp = await this.fetchInSpecificPlaces(this.state.location)
                    this.setState({
                        places: resp.places,
                        loading: false
                    })
                }
            })
        }, 1000);
    };

    fetchResults = async(searchPlace) => {
        this.setState({
            GoodService: false,
            QuitePlace: false,
            WifiRate: false,
        })
        const placeToSearch = {
            latitude: this.props.coords.latitude,
            longitude: this.props.coords.longitude,
            searchQuery: searchPlace,
            placeToSearch: searchPlace
        }
        let places = await Api.fetch(`/placesSearch?limit=${this.state.limit}&skip=${this.state.skip}`, "POST", JSON.stringify(placeToSearch), "");
        console.log(searchPlace, places.places)
        console.log(places.total, this.state.limit, places.total / this.state.limit)
        if(places) {
            this.setState({
                places: places.places,
                pageCount: Math.ceil(places.total / this.state.limit),
            })
        }
    }

    filterResults = async(filter) => {
        const resp = await Api.fetch(`/places?limit=6&sortBy=${filter}&OrderBy=desc&skip=${this.state.skip}`)
        this.setState({
            places: resp.places,
            pageCount: Math.ceil(resp.total / this.state.limit),
        })
    }

    fetchInSpecificPlaces = async(browserCity) => {
        let resp = await Api.fetch(`/placesInSpecificCity?limit=${this.state.limit}&skip=${this.state.skip}`,"POST", JSON.stringify(browserCity), "");
        return resp;
    }

    toggleLoading = () => {
        this.setState({
            loading: !this.state.loading,
        })
    }

    togleFilter = (filterProperty) => {
        this.setState({
          [filterProperty]: !this.state[filterProperty],
          toFilter: filterProperty,
          skip:0,
        });
        this.filterResults(filterProperty)
      };

    getAddress = async (latitude, longitude) => {
        const resp = await fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&sensor=true&key=AIzaSyDlkDftixlz_nvsxuPi0flAOP_0Cc6poBE')
        console.log(resp)
        const respJson = await resp.json()
        console.log(respJson)
        for(var i = 0; i < respJson.results[0].address_components.length; i++) {
            for(var j = 0; j < respJson.results[0].address_components[i].types.length; j++) {
                if(respJson.results[0].address_components[i].types[j] === "locality"){
                    return respJson.results[0].address_components[i].long_name
                }
            }
        }
    };

    skip= () => {
        this.setState({
            skip: 0
        })
    }

    customCitySearch = async(city) => {
        Geocode.fromAddress(city).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              console.log(lat, lng);
              this.setState({
                  location: {
                    latitude: lat,
                    longitude: lng,
                    city: city 
                  }
              })
              return this.fetchInSpecificPlaces(this.state.location)
            },
            error => {
              console.error(error);
            }
        );
    }

    componentDidMount = async() => {
        Geocode.setApiKey("AIzaSyDlkDftixlz_nvsxuPi0flAOP_0Cc6poBE");
        setTimeout(async() => {
            if(this.props.latitude === "null" || !this.props.latitude || !this.props.coords.latitude || this.props.coords.latitude === "null" || !this.props.isGeolocationAvailable || !this.props.isGeolocationEnabled) {
                this.setState({
                    loading: true
                })
                const browserCity = {
                    latitude: 52.520008,
                    longitude: 13.404954,
                    city: "Berlin"
                }
                console.log(browserCity)
                let places = await this.fetchInSpecificPlaces(browserCity)
                console.log(places)
                this.setState({
                    loading: false,
                    places: places.places,
                    pageCount: Math.ceil(places.total / this.state.limit),
                    location: {
                        latitude: 52.520008,
                        longitude: 13.404954,
                        city: "Berlin"
                    }
                })
            } else {
                console.log(this.props.coords.latitude, this.props.coords.longitude)
                const city = await this.getAddress(this.props.coords.latitude, this.props.coords.longitude)
                this.setState({
                    loading: true
                })
                const browserCity = {
                    latitude: this.props.coords.latitude,
                    longitude: this.props.coords.longitude,
                    city: city
                }
                let places = await this.fetchInSpecificPlaces(browserCity)
                this.setState({
                    loading: false,
                    places: places.places,
                    pageCount: Math.ceil(places.total / this.state.limit),
                    location: {
                        latitude: this.props.coords.latitude,
                        longitude: this.props.coords.longitude,
                        city: city
                    }
                })
            }
        }, 3000)
      };

    render() {
        return (
            <>
            <Container fluid style={{padding: '0px', width: '100vw'}}>
                <div className={'flex-box'}>
                    <div className="flex-row cover-image-bg">
                        <h1 className={'landing-page-title'}>
                            Your next
                            <br/> perfect place <br/>
                            to work.
                        </h1>
                    </div>
                </div>
                    <LandingSearch
                    skip={this.skip}
                    toggleLoading={this.toggleLoading}
                    fetchResults={this.fetchResults}
                    location={this.state.location}
                    />
                    <LandingAPI
                        customCitySearch={this.customCitySearch}
                        pageCount={this.state.pageCount}
                        city={this.state.location.city}
                        loading={this.state.loading}
                        togleFilter={this.togleFilter}
                        WifiRate={this.state.WifiRate}
                        QuitePlace={this.state.QuitePlace}
                        GoodService={this.state.GoodService}
                        places={this.state.places}
                        handlePageClick={this.handlePageClick}
                    />

                </Container>
            </>
        );
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(LandingPage);
