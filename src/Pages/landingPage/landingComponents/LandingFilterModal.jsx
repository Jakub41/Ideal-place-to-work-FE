import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import closeIcon from "../../../icons/close.png";
import cupIcon from "../../../icons/bars01.png";
import workIcon from "../../../icons/cowos01.png"
import wifiIcon from "../../../icons/wifi01.png"
import cupIcon2 from '../../../icons/bars02.png'
import workIcon2 from '../../../icons/cowos02.png'
import wifiIcon2 from '../../../icons/wifi02.png'

class LandingFilterModal extends React.Component {
  state = {
    modalOpen: true,
  };

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
              <img className="filterIcons" src={this.props.GoodService ? cupIcon2 : cupIcon}
                   id="GoodService" onClick={(e) => this.props.toggleFilter(e.target.id)} alt="service-icon"/>

              <img className="filterIcons" src={this.props.GoodWorkingPlace ? workIcon2 : workIcon}
                   id="GoodWorkingPlace" onClick={(e) => this.props.toggleFilter(e.target.id)} alt="working-icon"/>

              <img className="filterIcons" src={this.props.GoodWifi ? wifiIcon2 : wifiIcon}
                   id="GoodWifi" onClick={(e) => this.props.toggleFilter(e.target.id)} alt="wifi-icon"/>

              {/* <Row><p>Good Services</p><p>Good Working Place</p><p>Good Wifi</p></Row> */}
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
