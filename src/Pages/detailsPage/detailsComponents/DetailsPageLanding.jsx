import React, {Component} from 'react';
import {Container, Row} from "reactstrap";


class DetailsPageLanding extends Component {
    render() {
        return (
            <>
                <Container fluid>
                    <Row className='cover-image' src={'image'} fluid style={{height: "100vh"}}></Row>

                </Container>
            </>
        );
    }
};

export default DetailsPageLanding;