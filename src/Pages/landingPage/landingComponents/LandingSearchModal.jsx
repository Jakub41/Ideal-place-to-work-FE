import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import closeBtn from '../../../icons/close.png'
import geoLink from '../../../icons/Pin02.png'

class LandingSearchModal extends Component {
    state = {
        modalOpen: true
    }

  render() {

    return (
      <div>
        <Modal isOpen={this.props.modal}
          size="sm"
          aria-labelledby="example-modal-sizes-title-sm">
          <ModalHeader>
          <img src={closeBtn} id="closeBtnImg" alt="closeBtn" onClick={this.props.handleModal}/>
            <p>Map It</p>
          <img src={geoLink} id="geoLinkImg" alt="closeBtn"/>
          </ModalHeader>
          <ModalBody>Recent Searches...</ModalBody>
        </Modal>
      </div>
    );
  }
}

export default LandingSearchModal;
