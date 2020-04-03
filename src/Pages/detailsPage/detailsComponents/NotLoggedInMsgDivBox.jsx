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
        className={ this.props.alertMsgOpen ? "please-login-fake-modal" : "please-login-reg-div" }>
        <h4 id="please-login-fake-modal">You are Signed Out. Please Login or Signup to Rate Places!</h4>
      </div>
    );
  }
}

export default NotLoggedInMsgDivBox;


