import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Row } from "reactstrap";
import closeIcon from "../../../icons/close.png";
import cupIcon from "../../../icons/bars01.png";
import workIcon from "../../../icons/cowos01.png"
import wifiIcon from "../../../icons/wifi01.png"
// import 'react-toggle/style.css';

class LandingFilterModal extends React.Component {
  state = {
    modalOpen: true,
    toggle: false
  };

toggleFilter = () => {
  if(this.state.toggle === true) {
    this.setState({toggle: false})
  } else if (this.state.toggle === false) {
    this.setState({toggle: true})
  }
} 

  render() {
    // console.log(this.props.modal)
    console.log(this.props.toggle)
    return (
      <>
        <Modal isOpen={this.props.modal}>

          <ModalHeader Title>
            <div style={{ color: "green" }}>
              Filter By
              <img src={closeIcon} id="closeIcon" alt="closeIcon" onClick={this.props.handleModal}/>
            </div>
          </ModalHeader>

          <ModalBody>
              <img className="filterIcons" src={cupIcon} onClick={this.toggleFilter}/> 
              <img className="filterIcons" src={workIcon} onClick={this.toggleFilter}/>
              <img className="filterIcons" src={wifiIcon} onClick={this.toggleFilter}/>
          </ModalBody>

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
