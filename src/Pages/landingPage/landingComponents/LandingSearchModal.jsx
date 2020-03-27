import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap'
import closeBtn from '../../../icons/close.png'
import geoLink from '../../../icons/Pin02.png'


function LandingSearchModal(props){
  console.log(props)
  const [placeList] = useState(localStorage.getItem(("placeList").split(",")))

    return (
      
        <Modal isOpen={props.modal}
          size="sm"
          aria-labelledby="example-modal-sizes-title-sm">
          <ModalHeader>
          <img src={closeBtn} id="closeBtnImg" alt="closeBtn" onClick={props.modalToggle}/>
            <p>Map It</p>
          <img src={geoLink} id="geoLinkImg" alt="closeBtn"/>
          </ModalHeader>

          <ModalBody>
            <Row>
              <Col>
                <h5>Recent Searches...</h5> 
                <br></br>
                {placeList}
              </Col>
            </Row>
          </ModalBody>

        </Modal>
      
    );

}

export default LandingSearchModal;
