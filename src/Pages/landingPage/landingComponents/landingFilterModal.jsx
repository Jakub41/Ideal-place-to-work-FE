import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import closeIcon from "../../../icons/close.png";

class LandingFilterModal extends React.Component {
  state = {
    modalOpen: true
  };

  render() {
    // console.log(this.props.modal)
    return (
      <>
        <Modal isOpen={this.props.modal}>
          <ModalHeader Title>
            <div style={{ color: "green" }}>
              Filter By
              <img src={closeIcon} id="closeIcon" alt="closeIcon" onClick={this.props.handleModal}/>
            </div>
          </ModalHeader>
          <ModalBody>this is where a bunch of filter icons will go</ModalBody>
          <ModalFooter>
            <p>Choose by filters.</p>
            <p>
              <strong>Unselect them for ALL results.</strong>
            </p>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default LandingFilterModal;
