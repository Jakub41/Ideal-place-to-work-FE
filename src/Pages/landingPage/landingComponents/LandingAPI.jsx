import React, { Component } from "react";
import {Row, Col, Container} from "reactstrap"
import { Link } from 'react-router-dom'
// import mockData from '../../../Components/data/MOCK_DATA.json'
import LandingFilterModal from './LandingFilterModal'
import '../Landing.css'


class LandingAPI extends Component {
    state = {
        places: [],
        modalOpen: false,
        GoodService: false,
        GoodWorkingPlace: false,
        GoodWifi: false
    }

    modalOpen = () => {
        if(this.state.modalOpen === true) {
            this.setState({modalOpen: false})
        } else if (this.state.modalOpen === false){
            this.setState({modalOpen: true})
        }
    }
    toogleFilter = (filterProperty) => {
        this.setState({
            [filterProperty]: !this.state[filterProperty]
        })
        /*
        name = "GoogService"
        this.setState({
         // GoodService: !GoodService
        GoodService: !this.state.GoodService
       })
       */
    }

    componentDidMount = async () => {
        let places = await fetch("http://localhost:9100/api/v1/placesInSpecificCity")
        console.log(fetch)
        let placesJson = await places.json();
        console.log(placesJson);
        this.setState( {places: placesJson} )
    }

    render() {
        // console.log(this.state.modalOpen)
        return (<>
            <Container >
                <Row flex="md-4">
                    <Col className="landingAPIHeaders"><h3>Near You</h3></Col><Col><h3 id="filterBy" onClick={this.modalOpen}>Filter By</h3></Col>
                </Row>

                <Row>
                    {this.state.places && this.state.places.map((places, index) => (
                        <Col key={index} className="col-4 places-Col">
                            <h4 className="placeNames">{places.Name}</h4>
                            <Link to={"/details/" + places._id}><img className="placeImgs"
                                                                     src={places.Pictures[0]}
                                                                     alt="places"/></Link>
                            <Col><h5>{places.RateAverage}</h5></Col>
                        </Col>

                    ))}

                </Row>

                {this.state.modalOpen &&
                <LandingFilterModal
                    modal={this.state.modalOpen}
                    toggleFilter={this.toogleFilter}
                    handleModal={this.modalOpen}
                    GoodService={this.state.GoodService}
                    GoodWorkingPlace={this.state.GoodWorkingPlace}
                    GoodWifi={this.state.GoodWifi}/>}

            </Container>
        </>);
    }
}
export default LandingAPI;
