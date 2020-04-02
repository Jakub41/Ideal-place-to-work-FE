import React from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row} from 'reactstrap';
import Api from '../../../Api';
import RatingStars from "./RatingStars";
import Coffee from "../../../icons/bars01.png";
import ComfyPlace from "../../../icons/cowos01.png";
import WiFi from "../../../icons/wifi01.png";
import "../Rating.css"


class CommentModal extends React.Component {
    //const {buttonLabel, className} = props;
    //experience = JSON.parse(JSON.stringify(this.props.experience));

    constructor(props) {
        super(props);
        this.state = {modal: false, selectedFile: null, comment: {comment: ""}};
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
    toggle = () => {
        this.setState({modal: !this.state.modal});
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
        return (
            <>
                <div className="cursor" onClick={this.toggle.bind(this)}>
                    <h2 className='rate-place' onClick={() => this.toggle.bind(this)}> Rate Place</h2>
                </div>
                <Modal style={{borderRadius: '30px'}} isOpen={this.state.modal} toggle={this.toggle.bind(this)}
                       className={this.props.className}>
                    <ModalHeader toggle={this.toggle.bind(this)}>Rate this Place</ModalHeader>
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
                </Modal>
            </>
        );
    }
}

export default CommentModal;
