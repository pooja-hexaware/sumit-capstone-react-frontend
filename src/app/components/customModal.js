import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import CustomCard from './customCard';

function CustomModal(props) {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={props.showModal} centered onHide={() => props.closeModal(false)}>
        <Modal.Body>
          {props.children}
        </Modal.Body>
      </Modal>
    </div>
  )
};

export default CustomModal;
