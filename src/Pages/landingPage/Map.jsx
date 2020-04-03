import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import marker from "../../icons/Pin02.png";
import GoogleMapReact from 'google-map-react';
import closeIcon from "../../icons/close.png";
import './Landing.css';

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
        const geo = new mapsApi.LatLng(parseInt(this.props.match.params.latitude) + "," + parseInt(this.props.match.params.longitude))
        // Search only if there is a string
        if (this.props.match.params.search) {
            var request = {
                location: geo,
                radius: '10000',
                query: this.props.match.params.search
            };
            placesService.textSearch(request, (results, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    console.log(results)
                    this.setState({
                        markers: results
                    })
                    console.log(this.state.markers)
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
                key: 'AIzaSyDlkDftixlz_nvsxuPi0flAOP_0Cc6poBE',
                libraries: ['places']
              }}
              id="map"
              defaultZoom={13} // Supports DP, e.g 11.5
              defaultCenter={{ lat: parseInt(this.props.match.params.latitude), lng: parseInt(this.props.match.params.longitude) }}
              yesIWantToUseGoogleMapApiInternals={true}
              onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
            >
                {this.state.markers.length > 0 && this.state.markers.map((marker, i) => 
                    <Marker 
                        key={i} 
                        onClick={() => console.log(marker.geometry.location.lat, marker.geometry.location.lng)}
                        lat={marker.geometry.location.lat()} 
                        lng={marker.geometry.location.lng()}
                    />
                )}
            </GoogleMapReact>
          </section>
        )
    }
}

export default withRouter(Map)