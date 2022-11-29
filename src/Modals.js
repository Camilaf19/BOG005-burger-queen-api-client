//import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function ModalWrongUser({ show, setShow }) {

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton={handleClose}>
          <Modal.Title>Warning:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your username and password are invalid, please try again.
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalWrongUser;