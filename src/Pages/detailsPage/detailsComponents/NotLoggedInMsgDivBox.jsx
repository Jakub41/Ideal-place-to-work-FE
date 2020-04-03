import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Login from "../../login/LoginModal";
import "../detailsComponents/NotLoggedIn.css";

class NotLoggedInMsgDivBox extends Component {
  // state = {
  //     alertMsgOpen: false
  // };

  render(props) {
    return (
        <div
            className={ this.props.alertMsgOpen ? "please-login-fake-modal" : 
            "please-login-reg-div" }>
                <div id="please-login-fake-modal">
            <h4>Please Login or Signup First!</h4>
                </div>
        </div>
    );
  }

}

export default NotLoggedInMsgDivBox;


