          <div>
            <h2 className="modal-rev-header">
              How would you <br />
              Rate this place?
            </h2>
            <img
              src={closeIcon}
              onClick={this.toggle}
              className="exit-icon"
              alt="searchIcon"
            />
          </div>
          <Row>
            <Col className="col-12">
              <Row className='mt-4'>
                <Col className="col-3">
                    <img
                    src={ComfyPlace}
                    className="rating-icon-modal"
                    alt="searchIcon"
                    />
                </Col>
                <Col className="col-9">
                  <Row>
                    <Col className="col-12">
                        <h3>Was the place quiet enough?</h3>
                    </Col>
                    <Col className="col-12"></Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Roboto:wght@700&display=swap');
/* modal stylings starts */
.review-modal-open {
    transition: all 0.5s ease-in;
    width: 600px;
    height: 700px;
    border-radius: 30px;
    box-shadow: 0px 0px 1px 5000px rgba(0,0,0,0.9);
    position: absolute;
    align-self: center;
    z-index: 100;
    margin: auto;
    top: 400px;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: white;
}

.review-modal-close{
    transition: all 1s ease-in;
    visibility: hidden;
}

.modal-rev-header{
    text-transform: uppercase;
    color: #9200E6;
    padding: 40px 0px 0px 50px;
    font-size: 40px;
    font-family: 'Poppins', sans-serif;
}

.exit-icon {
    width: 90px;
    position: absolute;
    right: 10px;
    top: 16px;
}
.rating-icon-modal{
    width: 80px;
    margin-left: 30px;
}