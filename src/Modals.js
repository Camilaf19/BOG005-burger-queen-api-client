import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


 function ModalWrongUser() {

  const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <button  className='buttonLogin' type='submit' onClick={handleShow}>Log In</button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
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