import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import CustomCard from '../components/customCard';
import { setMenuData, setCartData, setMenuPrice } from "./store/capstoneSlice"

function CartModal(props) {
  const dispatch = useDispatch();
  var cartData = useSelector((state) => state.capstone.cartData);
  var menuData = useSelector((state) => state.capstone.menuData);

  const handleAddQuantity = (obj) => {
    let modifiedData = menuData.map((res) => {
      if (res.name == obj.name) {
        let copiedObj = JSON.parse(JSON.stringify(res));
        copiedObj.quantity = (copiedObj.quantity == null ? 0 : copiedObj.quantity + 1);
        return copiedObj;
      } else {
        return res;
      }
    });

    let filteredCartData = modifiedData.filter(x => x.quantity > 0);
    let price = filteredCartData.reduce(function (prev, cur) {
      return prev + parseFloat(cur.amount) * cur.quantity;
    }, 0);

    dispatch(setCartData(filteredCartData));
    dispatch(setMenuPrice(price));
    dispatch(setMenuData(modifiedData));
  }

  const handleRemoveQuantity = (obj) => {
    let modifiedData = menuData.map((res) => {
      if (res.name == obj.name) {
        let copiedObj = JSON.parse(JSON.stringify(res));
        copiedObj.quantity = (copiedObj.quantity == null ? 0 : copiedObj.quantity - 1);
        return copiedObj;
      } else {
        return res;
      }
    });

    let filteredCartData = modifiedData.filter(x => x.quantity > 0);
    let price = filteredCartData.reduce(function (prev, cur) {
      return prev + parseFloat(cur.amount) * cur.quantity;
    }, 0);

    dispatch(setCartData(filteredCartData));
    dispatch(setMenuPrice(price));
    dispatch(setMenuData(modifiedData));
  }

  return (
    <>
      {cartData && cartData.length > 0 ? cartData.map((res) => (
        <>
          <CustomCard variant="light" border="light" key={res._id}>
            <Row>
              <Col md={{ span: 9 }}>
                <div className="fw-bold">{res.name}</div>
                <Row>
                  <Col md={{ span: 4 }} className="fw-bold text-danger">${res.amount}</Col>
                  <Col md={{ span: 2 }}>
                    <div className="border text-center">
                      x{res.quantity}
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col md={{ span: 3 }}>
                <Button variant="outline-secondary" size="sm" onClick={() => handleRemoveQuantity(res)}>
                  -
                </Button>

                <Button variant="outline-secondary" style={{ marginLeft: 5 }} size="sm" onClick={() => handleAddQuantity(res)}>
                  +
                </Button>
              </Col>
            </Row>
          </CustomCard>
          <hr style={{ margin: 0 }} />
        </>
      )) : <></>
      }
      <Row className="mt-4">
        <Col md={{ span: 9 }}>
          <h4>Total Amount</h4>
        </Col>

        <Col className="text-right" md={{ span: 3 }}>
          <h5>${props.totalPrice}</h5>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={{ span: 3 }}>
          <h6>Enter coupon</h6>
        </Col>

        <Col md={{ span: 4 }}>
          <Form.Control type="text" size="sm" />
        </Col>

        <Col md={{ span: 4 }}>
          <Button className="btn-color" size="sm">
            Validate coupon
          </Button>
        </Col>
      </Row>

      <hr style={{ margin: 0 }} />

      <Row className="mt-2">
        <Col md={{ span: 12 }}>
          <Form>
            <Form.Group className="mb-2" controlId="name">
              <Form.Label className="mb-0">Your Name</Form.Label>
              <Form.Control type="text" size="sm" />
            </Form.Group>

            <Form.Group className="mb-2" controlId="street">
              <Form.Label className="mb-0">Street</Form.Label>
              <Form.Control type="text" size="sm" />
            </Form.Group>

            <Form.Group className="mb-2" controlId="name">
              <Form.Label className="mb-0">Postal Code</Form.Label>
              <Form.Control type="text" size="sm" />
            </Form.Group>

            <Form.Group className="mb-2" controlId="street">
              <Form.Label className="mb-0">City</Form.Label>
              <Form.Control type="text" size="sm" />
            </Form.Group>

            <Form.Group className="mb-2" controlId="name">
              <Form.Label className="mb-0">Phone</Form.Label>
              <Form.Control type="text" size="sm" />
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <hr style={{ margin: 0 }} />

      <Row className="mt-2">
        <Col md={{ span: 12 }} className="d-flex justify-content-end">
          <Button variant="outline-primary">
            Close
          </Button>

          <Button className="btn-color" style={{ marginLeft: 5 }}>
            Order
          </Button>
        </Col>
      </Row>
    </>
  )
};

export default CartModal;
