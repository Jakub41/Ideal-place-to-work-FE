import React, {Component} from "react";
import "./Landing.css";
import Api from '../../Api'
import image from "../../images/shutterstock_610938071.jpg";
import {Row, Container, Col} from "reactstrap";
import LandingSearch from "./landingComponents/LandingSearch";
import LandingAPI from "./landingComponents/LandingAPI";


class LandingPage extends Component {
    state = {
        goodService: false,
        goodWorkingPlace: false,
        goodWifi: false,
        places: [],
        loading: false,
        nothingFound: false
    }

    fetchResults = async(searchPlace) => {
        console.log(searchPlace)
        const placeToSearch = {
            searchQuery: searchPlace
        }
        let places = await Api.fetch("/placesSearch", "POST", JSON.stringify(placeToSearch), "");
        console.log(places)
        if(places) {
            this.setState({
                places: places
            })
        }
    }
    toggleLoading = () => {
        this.setState({
            loading: !this.state.loading
        })
        console.log(this.state.loading)
    }
    togleFilter = (filterProperty) => {
        this.setState({
          [filterProperty]: !this.state[filterProperty]
        });
      };

    componentDidMount = async() => {
        console.log("hey")
        setTimeout(async() => {
            this.setState({
                loading: true
            })
            let places = await Api.fetch("/placesInSpecificCity");
            console.log(places)
            this.setState({ places: places });
            this.setState({
                loading: false
            })
        },2000)
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
                    <LandingSearch toggleLoading={this.toggleLoading} fetchResults={this.fetchResults}/>

                    <LandingAPI loading={this.state.loading} togleFilter={this.togleFilter} 
                    goodWifi={this.state.goodWifi} goodWorkingPlace={this.state.goodWorkingPlace} 
                    goodWifi={this.state.goodWifi} places={this.state.places}/>

                </Container>
            </>
        );
    }
}

export default LandingPage;
