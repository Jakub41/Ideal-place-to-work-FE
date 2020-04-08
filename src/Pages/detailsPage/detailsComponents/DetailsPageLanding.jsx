import React, {Component} from 'react';
import Pin from "../../../icons/Pin.png";
import Star from "../../../icons/Star.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDollarSign, faHeart} from "@fortawesome/free-solid-svg-icons"
import closeIcon from "../../../icons/close.png";
import {Link} from "react-router-dom";
import ReviewModal from "../../rating& review/reviewComponents/ReviewModal";
import UserReview from "../../rating& review/reviewComponents/UserReview";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import Api from "../../../Api"
import "../Details.css";
import DetailPageCarousel from "./DetailPageCarousel";
import {faClock} from "@fortawesome/free-regular-svg-icons";


const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    // loadProfiles: (user) => dispatch(loadProfile(user))
});

class DetailsPageLanding extends Component {
    state = {
        place: null,
        liked: false,
        rotate180: false
    };

    toggleRotation = async () => {
        if (this.state.rotate180 === false) {
            this.setState({
                rotate180: true
            })
        } else if (this.state.rotate180 === true) {
            this.setState({
                rotate180: false
            })
        }
    };

    toggleLike = async () => {
        if (this.state.liked === false) {
            this.setState({
                liked: true
            })
        } else if (this.state.liked === true) {
            this.setState({
                liked: false
            })
        }
        await Api.fetch(`/places/handlefavourites/${this.props.match.params.id}`, "POST", '',
            {"Authorization": "Bearer " + localStorage.getItem("access_token")})
    };

    componentDidMount = async () => {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            const id = this.props.match.params.id;
            const place = await Api.fetch("/places/" + id);
            console.log(place);
            this.setState({
                place: place
            })
        }
    };

    render() {
        return (
            <>
                {this.state.place && <>
                    <div className={'flex-box cover-image-details'}>
                        <DetailPageCarousel place={this.state.place}/>
                        <Link to="/"><img className="location-close-icon" src={closeIcon} alt="Close"/></Link>
                    </div>
                    <div className="container details">
                        <div className="coffee-point flex-box">
                            <div className="row-details">
                                <h2 className="place-title">{this.state.place.Name}</h2>
                            </div>
                            <div className="spacer"/>
                            <div className="click-to-like" style={{fontSize: "40px"}}>
                                <FontAwesomeIcon
                                    className={this.state.rotate180 ? "dislike-btn" : "like-btn"}
                                    icon={faHeart}
                                    onClick={() => {
                                        this.toggleLike();
                                        this.toggleRotation()
                                    }}/>
                            </div>
                        </div>
                        <div className="flex-box">
                            <div><img className="location-pin-icon" src={Pin} alt="Home"/></div>
                            <div className="location-text"><h4>{this.state.place.Location}</h4></div>
                        </div>
                        <div>
                            <div className="row-details-rate-place">
                                <div className="rating-container">
                                    <img className="rating-star-icon" src={Star} alt="rating"/>
                                </div>
                                <div>
                                    <div>
                                        <ReviewModal placeId={this.props.match.params.id}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row-details">

                                <div className="opening-hours"><h4 className="open-hours-text">Open
                                    Hours</h4>{this.state.place.OpenHours.map(hour => <div>
                                    <FontAwesomeIcon icon={faClock}/> {hour}</div>)}</div>
                                <div className="flex-box web-site">
                                    <div>
                                        <div><h4 className="website-title">Website:</h4></div>
                                        <div className="web-site-link"><p>{this.state.place.Website}</p></div>
                                        <div>
                                            {this.state.place.PriceToEnter !== -1 && <div className="flex-box">
                                                <div>
                                                    <h4>Price to enter:</h4>
                                                    <div className="flex-box">
                                                        <div><FontAwesomeIcon icon={faDollarSign}/></div>
                                                        <div
                                                            className="price-to-enter">{this.state.place.PriceToEnter}</div>
                                                    </div>
                                                </div>
                                            </div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div>
                            <UserReview placeId={this.props.match.params.id}/>
                        </div>
                    </div>
                </>}
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailsPageLanding));
