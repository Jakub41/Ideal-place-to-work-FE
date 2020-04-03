import React from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row} from 'reactstrap';
import Api from '../../../Api';
import RatingStars from "./RatingStars";
import Coffee from "../../../icons/bars01.png";
import ComfyPlace from "../../../icons/cowos01.png";
import WiFi from "../../../icons/wifi01.png";
import "../Rating.css"
import NotLoggedIn from "../../detailsPage/detailsComponents/NotLoggedInMsgDivBox"
import "../../detailsPage/detailsComponents/NotLoggedIn.css"


class CommentModal extends React.Component {
    //const {buttonLabel, className} = props;
    //experience = JSON.parse(JSON.stringify(this.props.experience));

    constructor(props) {
        super(props);
        this.state = {modal: false, alertMsgDiv: false, showAlertMsg: false, selectedFile: null, comment: {comment: ""}};
    }

    submit = (e) => {
        if (this.state.comment._id) {
            Api.fetch("/reviews/:reviewId" + this.props.placeId, "PATCH", JSON.stringify(this.state.comment),
                {"Authorization": "Bearer " + localStorage.getItem("access_token")}
        ).then(res => {

                console.log("edit", res);
                // this.props.refresh();
            });

        } else {
            Api.fetch("/reviews/" + this.props.placeId,
                "POST",
                JSON.stringify(this.state.comment),
                {"Authorization": "Bearer " + localStorage.getItem("access_token")}).then(res => {
                console.log("inserted", res);
                // this.props.refresh()
            });
        }
        this.setState({_id: undefined});
        this.toggle();
    };

    toggleModalOrAlert = async () => {
        const token = localStorage.getItem("access_token")
        console.log("hey", token)
        if(token !== "undefined") {
            console.log("hey im here and i have a token!")
            this.setState({modal: !this.state.modal})
        } else if(token === "undefined" ){
            console.log("hey im here and i don't have a token!")
            this.setState({alertMsgDiv: !this.state.alertMsgDiv})
        }
        console.log(this.state)
    };

    showAlertMsg = (e) => {
        this.setState({alertMsgOpen: true})
      };

     onChangeHandler = event => {
        console.log(event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    };

    updateForm = (e) => {
        this.setState({comment: {...this.state.comment, [e.target.id]: e.target.value}});
    };

    addEmoticon = (e) => {
        e.persist();
        console.log(e);
        this.setState({comment: {comment: this.state.comment.comment + e.target.innerText}});
    };

    render() {
        const props = this.props;
        return (<>
                <div id="please-login-reg-div" className="cursor" onClick={() => {this.toggleModalOrAlert(); this.showAlertMsg()}} >
                    <h2 className='rate-place'> Rate Place</h2>
                </div>
                {this.state.alertMsgDiv &&  <NotLoggedIn alertMsgOpen={this.alertMsgOpen}/>} 
                {this.state.modal && 
                <Modal style={{borderRadius: '30px'}} isOpen={this.state.modal} 
                    toggle={this.toggleModalOrAlert} className={this.props.className}>
                    <ModalHeader toggle={this.toggleModalOrAlert}>Rate this Place</ModalHeader>
                    <ModalBody>
                        <Form>
                            <Row form>
                                <Col md={12}>
                                    <FormGroup>
                                        <div>
                                            <div className="star-rating-div">
                                                <RatingStars placeId={this.props.placeId}/>
                                            </div>

                                                <div className="comment-icon-container">
                                                    <div className="comment-icon-container1">
                                                        <img src={Coffee} alt="Coffie" className="coffee-icon"/>
                                                        <p className="coffee-text">Good Services</p>
                                                    </div>
                                                    <div className="comment-icon-container2">
                                                        <img src={ComfyPlace} alt="comfyPlace" className="comfyPlace-icon"/>
                                                        <p className="comfyPlace-text">Comfortable Place</p>
                                                    </div>
                                                    <div className="comment-icon-container3">
                                                        <img src={WiFi} alt="WiFi" className="wifi-icon"/>
                                                        <p className="wifi-text">Strong Wi-fi</p>
                                                    </div>
                                                </div>
                                        </div>
                                        <Label for='startDate'>Write your comment</Label>
                                        <Input type="textarea" onChange={this.updateForm} name="Text" id="Text"
                                               cols="80"
                                               rows="10" value={this.state.comment.Text}></Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <span style={{cursor: 'pointer'}} onClick={this.addEmoticon}>😀</span>
                                <span style={{cursor: 'pointer'}} onClick={this.addEmoticon}>🤣</span>
                                <span style={{cursor: 'pointer'}} onClick={this.addEmoticon}>😇</span>
                                <span style={{cursor: 'pointer'}} onClick={this.addEmoticon}>😅</span>
                                <span style={{cursor: 'pointer'}} onClick={this.addEmoticon}>😜</span>
                                <span style={{cursor: 'pointer'}} onClick={this.addEmoticon}>😩</span>
                                <span style={{cursor: 'pointer'}} onClick={this.addEmoticon}>😭</span>
                                <span style={{cursor: 'pointer'}} onClick={this.addEmoticon}>😡</span>
                            </Row>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='primary' onClick={this.submit.bind(this)}>
                            Submit
                        </Button>
                    </ModalFooter>
                </Modal>} 
            </>
        );
    }
}

export default CommentModal;
