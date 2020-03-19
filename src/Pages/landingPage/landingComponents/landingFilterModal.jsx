import React from 'react';
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'reactstrap'

class LandingFilterModal extends React.Component {
    state = {
        modalOpen: true
    }

     
    render() {
        console.log(this.props.modal)
        return (
            <>                 
                <Modal isOpen={this.props.modal}>
                <ModalHeader Title>
                <div onClick={this.props.handleModal} style={{color: "green"}}>Filter By</div>
                </ModalHeader>
                <ModalBody>this is where a bunch of filter icons will go</ModalBody>
                 <ModalFooter>
                <p>Choose by filters.</p> 
                <p><strong>Unselect them for ALL results.</strong></p>
                </ModalFooter>
                </Modal> 
            </>
        );
    }
}

export default LandingFilterModal;