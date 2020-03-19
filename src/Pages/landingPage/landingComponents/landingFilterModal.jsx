import React, { Component } from 'react';
import { Container, Row, Col, Modal } from 'reactstrap'

class landingFilterModal extends Component {
    state = {
        modalOpen: true
    }

    modalClose = () => {
        if(this.state.modalOpen == false) {
          this.setState({modalOpen: false})
        } else if (this.state.modalOpen === true){
           this.setState({modalOpen: false})
        }
      } 
    render() {
        
        return (
            <Container>                   
                <Modal show={show} onHide={modalClose}>
                <Modal.Header Title>
                <Modal.Title onClick={modalClose} style={{color: "green"}}>Filter By</Modal.Title>
                </Modal.Header>
                <Modal.Body>this is where a bunch of filter icons will go</Modal.Body>
                 <Modal.Footer>
                <p>Choose by filters.</p> 
                <p><strong>Unselect them for ALL results.</strong></p>
                </Modal.Footer>
                </Modal> 
            </Container>
        );
    }
}

export default landingFilterModal;