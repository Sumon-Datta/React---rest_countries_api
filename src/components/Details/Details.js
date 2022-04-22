import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


const Details = (props) => {

    let {title,price,image,description} = props.product


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          Details
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className='text-center' > <img className='w-50' src={image} alt="" /> </Modal.Body>
          <h3 className='text-center'>Price:{price}</h3>
          <hr />
          <p className='mx-3'>{description.slice(0,100)}</p>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default Details;