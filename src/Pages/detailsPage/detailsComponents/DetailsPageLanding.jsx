import React, {Component} from 'react';
import {Input, Container, Row, Col} from "reactstrap";
import Pin from "../../../icons/Pin.png";
import Star from "../../../icons/Star.png";
import searchIcon from "../../../icons/Search.png";
import closeIcon from "../../../icons/close.png";
import {Link} from "react-router-dom";
import CommentForm from "../../rating& review/reviewComponents/RatingStars";
import ReviewModal from "../../rating& review/reviewComponents/ReviewModal";
import UserReview from "../../rating& review/reviewComponents/UserReview";


class DetailsPageLanding extends Component {
    render() {
        return (
            <>
                <Container fluid>
                    <Link to="/">
                        <img className="location-close-icon" src={closeIcon} alt="Close"/></Link>
                    <Row className='cover-image' src={'image'} fluid style={{height: "150vh"}}>
                    </Row>
                </Container>
                <div className="container">
                    <div className="coffee-point">
                        <div className="row-details">
                            <h2>Coffee Point</h2>
                        </div>
                    </div>
                    <div className="row-details">
                        <img className="location-pin-icon" src={Pin} alt="Home"/>
                        <h4>Location</h4>
                    </div>
                    <div>
                        <p className="details-para">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only
                            five
                            centuries, but also the leap into electronic typesetting, <br/> remaining essentially
                            unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                            Ipsum
                            passages,<br/> and more recently with desktop publishing software like Aldus PageMaker
                            including
                            versions of Lorem Ipsum.</p>
                    </div>
                    <div className="row-details-rate-place">
                        <div className="rating-container"><img className="rating-star-icon" src={Star} alt="rating"/>
                        </div>
                        <div>
                            <ReviewModal/>
                        </div>
                        <div>
                            <UserReview/>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default DetailsPageLanding;
