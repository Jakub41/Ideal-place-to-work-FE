import React, {Component} from 'react';
import Background from '../images/Betahaus-Cafe-Berlin.jpg';
import {Col, Row, Container} from "reactstrap";


class LandingPage extends Component {
    render() {
        return (
            <>
                <Container fluid>
                    <Row className={"image"}>
                        <Col>
                            <img src={Background} style={{width: "100%", height: "700px"}} alt={""}/>
                            <h1> Your next <br/> perfect perfect <br/> place to work</h1>
                        </Col>
                    </Row>
                </Container>


            </>
        );
    }
}

export default LandingPage;