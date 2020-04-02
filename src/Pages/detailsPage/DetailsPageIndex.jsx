import React, {Component} from 'react';
import DetailsPageLanding from "./detailsComponents/DetailsPageLanding";
import "./Details.css";
import UserReview from "../rating& review/reviewComponents/UserReview";


class DetailsPageIndex extends Component {
    render() {
        return (
            <div>
                <div>
                    <DetailsPageLanding/>
                </div>
                <div>
                    <UserReview/>
                </div>
            </div>
        );
    }
}

export default DetailsPageIndex;
