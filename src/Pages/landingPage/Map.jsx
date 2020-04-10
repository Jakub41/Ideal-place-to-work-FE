import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import marker from "../../icons/Pin02.png";
import GoogleMapReact from 'google-map-react';
import closeIcon from "../../icons/close.png";
import './Landing.css';
import NewFooter from "./landingComponents/NewFooter";

const Marker = () => <img className='marker-map' src={marker} alt="marker"/>;

class Map extends React.Component {
    state = {
        markers: []
    }

    apiHasLoaded = (map, mapsApi) => {
        this.setState({
          mapsApi,
          placesService: new mapsApi.places.PlacesService(map),
          directionService: new mapsApi.DirectionsService(),
          geoCoderService: new mapsApi.Geocoder(),
      });
    }

    handleSearch = () => {
        const { placesService, mapsApi } = this.state;
        const lat = parseFloat(this.props.match.params.latitude);
        const lng = parseFloat(this.props.match.params.longitude)
        const geo = new mapsApi.LatLng(lat, lng)
        console.log(geo)
        // Search only if there is a string
        if (this.props.match.params.search) {
            var request = {
                location: geo,
                radius: '10000',
                query: this.props.match.params.search
            };
            console.log(request)
            placesService.textSearch(request, (results, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    console.log(results)
                    this.setState({
                        markers: results
                    })
                    console.log('markers', this.state.markers)
                }
            })
        }
      };

      componentDidMount = () => {
        setTimeout(() => {
            this.handleSearch()
        }, 3000)
      }

    render() {
        return (
            <section className="col-12 h-lg">
                <Link to="/"><img className="location-close-icon" src={closeIcon} alt="Close"/></Link>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: process.env.REACT_APP_GOOGLE_API,
                        libraries: ['places']
                    }}
                    defaultZoom={13} // Supports DP, e.g 11.5
                    defaultCenter={{
                        lat: parseFloat(this.props.match.params.latitude),
                        lng: parseFloat(this.props.match.params.longitude)
                    }}
                    yesIWantToUseGoogleMapApiInternals={true}
                    onGoogleApiLoaded={({map, maps}) => this.apiHasLoaded(map, maps)}
                >
                    {this.state.markers.length > 0 && this.state.markers.map((marker, i) =>
                        <Marker
                            key={i}
                            onClick={() => console.log(marker.geometry.location.lat(), marker.geometry.location.lng())}
                            lat={marker.geometry.location.lat()}
                            lng={marker.geometry.location.lng()}
                        />
                    )}
                </GoogleMapReact>
                {/*<div><NewFooter/></div>*/}
          </section>

        )
    }
}

export default withRouter(Map)
