import React from 'react';
import { decrement } from "../main/store/capstoneSlice";
import { Card } from 'react-bootstrap';

function CustomCard(props) {
  return (
    <>
      <Card
        bg={props.variant.toLowerCase()}
        text={props.variant.toLowerCase() === 'light' || props.variant.toLowerCase() === 'white' ? 'dark' : 'white'}
        style={{ width: props.width }}
        className={props.customClass}
        border={props.border}
      >
        {/* <Card.Header>Header</Card.Header> */}
        <Card.Body className={props.customBodyClass}>
          <Card.Title className={props.textAlign}>{props.title} </Card.Title>
          <Card.Text className={props.textAlign}>
            {props.children}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
};

export default CustomCard;
