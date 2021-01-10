import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CardComponent from "../Card";
import AddCardButton from "../Search/Button";

// when using the success modal, the message you want displayed needs to be passed in through the message prop
function ResultsModal({ show, setShow, results, addCollectedCard }) {
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Search Results:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row justify-content-start">
            {!results.length && (
              <h3 style={{ color: "black" }}>No results found...</h3>
            )}
            {results.map((card) => (
              <div className="col-12 pb-2 text-center" key={card._id}>
                <CardComponent card={card} />
                <AddCardButton
                  addCollectedCard={addCollectedCard}
                  id={card._id}
                />
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn-border"
          variant="secondary"
          onClick={() => setShow(false)}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ResultsModal;
